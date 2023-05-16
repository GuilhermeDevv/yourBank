import { useCallback, useContext, useState } from 'react'
import {
  Aside,
  Container,
  ContainerInput,
  Content,
  Form,
  Icon,
  Logo,
} from './styles'
import { MdEmail, MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { IoMdLock } from 'react-icons/io'
import logo from '@/img/logo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { AuthContext } from '@/context/userContext'
import { CardStatus } from '../CardStatus/CardStatus'
import Success from '@/../public/success.svg'
import Error from '@/../public/error.svg'

/* separator */

const schema = z.object({
  email: z.coerce.string().email('Endereço de E-mail inválido'),
  password: z.coerce.string().min(6, 'Senha deve conter 6 dígitos'),
})

type FormData = z.infer<typeof schema>

/* separator */
axios.defaults.baseURL = 'https://your-bank.vercel.app/user'
export function LoginComponent() {
  const { setAuthorized, setUserData } = useContext(AuthContext)
  const [animation, setAnimation] = useState(true)
  const [visibilityPassword, setVisibilityPassword] = useState(true)
  const navigate = useNavigate()
  const [visibilityCardStatus, setVisibilityCardStatus] =
    useState<boolean>(false)
  const [textCard, setTextCard] = useState('')
  const [srcCard, setSrcCard] = useState('')
  const [colorCard, setColorCard] = useState('')
  const [statusCard, setStatusCard] = useState('')
  const [fnCallbackCard, setFnCallbackCard] = useState<() => void>(() => {})
  function itsSuccess() {
    setVisibilityCardStatus(false)
    navigate('/home')
  }
  function itsError() {
    setVisibilityCardStatus((prev) => !prev)
  }
  const onSubmit = useCallback(
    (data: FormData) => {
      axios
        .post('/login', data)
        .then((response) => {
          setAuthorized((prev) => !prev)
          setUserData(response.data.message)
          // eslint-disable-next-line no-undef
          localStorage.setItem('user', JSON.stringify(response.data.message))
          setTextCard(
            `Login efetuado com sucesso, seja bem vindo ${response.data.message.name}.`,
          )
          setSrcCard(Success)
          setStatusCard('SUCESSO')
          setFnCallbackCard(() => itsSuccess)
          setColorCard('green')
          setTimeout(() => {
            setVisibilityCardStatus(true)
          }, 100)
          setTimeout(() => {
            setAnimation(false)
          }, 100)
        })
        .catch((error) => {
          setVisibilityCardStatus((prev) => !prev)
          setTextCard(`Algo deu errado. ${error.response.data.message}.`)
          setSrcCard(Error)
          setStatusCard('FALHA')
          setFnCallbackCard(() => itsError)
          setColorCard('red')
        })
    },
    [setAuthorized, setUserData, navigate],
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  return (
    <Container>
      <Content animation={animation}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Logo Url_Logo={logo} />
          <h1>ACESSAR SUA CONTA</h1>
          <ContainerInput>
            <input type="text" placeholder="E-mail" {...register('email')} />
            <span>{errors.email?.message}</span>
            <Icon>
              <MdEmail size={18} />
            </Icon>
          </ContainerInput>
          <ContainerInput>
            <input
              type={visibilityPassword ? 'password' : 'text'}
              placeholder="Senha"
              {...register('password')}
            />
            <span>{errors.password?.message}</span>
            <Icon>
              <IoMdLock size={18} />
            </Icon>
            <Icon
              onClick={() => {
                setVisibilityPassword((prev) => !prev)
              }}
            >
              <div className="visibility">
                {visibilityPassword ? (
                  <MdVisibility size={18} />
                ) : (
                  <MdVisibilityOff size={18} />
                )}
              </div>
            </Icon>
          </ContainerInput>
          <button type="submit">ENTRAR</button>
        </Form>
      </Content>
      <Aside animation={visibilityCardStatus!}>
        {visibilityCardStatus && (
          <CardStatus
            text={textCard}
            src={srcCard}
            status={statusCard}
            fnCallback={fnCallbackCard!}
            cor={colorCard}
          />
        )}
      </Aside>
    </Container>
  )
}
