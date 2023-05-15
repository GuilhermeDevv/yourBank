import { useCallback, useState } from 'react'
import Success from '@/../public/success.svg'
import Error from '@/../public/error.svg'
import { Container, Content, Form, Info } from './styles'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoMdLock } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import axios from 'axios'
import { CardStatus } from '../CardStatus/CardStatus'
/* separator */

const schema = z.object({
  email: z.coerce.string().email('Endereço de E-mail invalido'),
  password: z.coerce.string().min(6, 'Senha deve conter 6 dígitos '),
  name: z.string().min(2, 'Confere seu nome por favor! '),
})
type FormData = z.infer<typeof schema>

/* separator */

export function RegisterComponent() {
  const [transition, setTransition] = useState(true)
  const [visibilityCardStatus, setVisibilityCardStatus] =
    useState<boolean>(false)
  const [textCard, setTextCard] = useState('')
  const [srcCard, setSrcCard] = useState('')
  const [colorCard, setColorCard] = useState('')
  const [statusCard, setStatusCard] = useState('')
  const [fnCallbackCard, setFnCallbackCard] = useState<() => void>(() => {})
  const navigate = useNavigate()
  axios.defaults.baseURL = 'http://localhost:3333/user'
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  function itsSuccess() {
    setVisibilityCardStatus(false)
    navigate('/login')
  }
  function itsError() {
    setVisibilityCardStatus((prev) => !prev)
  }
  const handleSuccess = useCallback(() => {
    // eslint-disable-next-line no-undef
    localStorage.removeItem('user')
    setTextCard('Conta criada com sucesso, seja bem vindo.')
    setTransition((prev) => !prev)
    setSrcCard(Success)
    setStatusCard('SUCESSO')
    setFnCallbackCard(() => itsSuccess)
    setColorCard('green')
    setTimeout(() => {
      setVisibilityCardStatus((prev) => !prev)
    }, 100)
  }, [])

  const handleError = useCallback((error: any) => {
    setVisibilityCardStatus((prev) => !prev)
    setTextCard(`Algo deu errado. ${error.response.data.message}.`)
    setSrcCard(Error)
    setStatusCard('FALHA')
    setFnCallbackCard(() => itsError)
    setColorCard('red')
  }, [])

  const onSubmit = useCallback(
    (data: FormData) => {
      axios.post('/register', data).then(handleSuccess).catch(handleError)
    },
    [handleSuccess, handleError],
  )
  return (
    <Container>
      <Content>
        <Info stateAnimation={!!transition}>
          <h1>Olá, tudo bom!</h1>
          <h2>para manter-se conectado, faça login com seu acesso pessoal</h2>
          <button
            onClick={() => {
              setTransition(!transition)
              setTimeout(() => {
                navigate('/login')
              }, 1000)
            }}
          >
            ENTRAR
          </button>
        </Info>
        <Form onSubmit={handleSubmit(onSubmit)} stateAnimation={!!transition}>
          <h1>Crie sua conta!</h1>
          <div>
            <input type="text" placeholder="Name" {...register('name')} />
            <span>{errors.name?.message}</span>
            <FaUser size={18} />
          </div>
          <div>
            <input type="text" placeholder="Email" {...register('email')} />
            <span>{errors.email?.message}</span>
            <MdEmail size={18} />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register('password')}
            />
            <span>{errors.password?.message}</span>
            <IoMdLock size={18} />
          </div>
          <button type="submit">CADASTRE-SE</button>
        </Form>
        <aside>
          {visibilityCardStatus && (
            <CardStatus
              text={textCard}
              src={srcCard}
              status={statusCard}
              fnCallback={fnCallbackCard!}
              cor={colorCard}
            />
          )}
        </aside>
      </Content>
    </Container>
  )
}
