import { CloseConfig, Container, Content, Form, Main } from './styles'
import { BsPersonCircle } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { AuthContext } from '@/context/userContext'
import { useContext } from 'react'

type ConfigAccountProps = {
  fnVisibilityConfigAccount: (v: boolean) => void
}

const schema = z
  .object({
    password: z.string().min(6, 'Precisa ter no mínimo 6 carácteres'),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'As senhas devem coincidir',
    path: ['confirm'],
  })

type FormData = z.infer<typeof schema>

export function ConfigAccount({
  fnVisibilityConfigAccount,
}: ConfigAccountProps) {
  const { userData } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  function onSubmit({ password }: FormData) {
    axios
      .put('http://localhost:3333/user/update', {
        email: userData.email,
        password,
      })
      .then((response) => {
        fnVisibilityConfigAccount(false)
      })
  }
  return (
    <Container>
      <Content>
        <CloseConfig
          onClick={() => {
            fnVisibilityConfigAccount(false)
          }}
        >
          <AiOutlineClose size={30} />
        </CloseConfig>
        <Main>
          <h2>
            Olá, <span>{userData.name}</span>
          </h2>
          <BsPersonCircle size={40} />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <span>Alterar senha</span>
            <div>
              <input
                type="password"
                placeholder="Senha nova"
                {...register('password')}
              />
              <p>{errors.password?.message}</p>
            </div>
            <div>
              <input
                type="password"
                placeholder="Digite novamente"
                {...register('confirm')}
              />
              <p>{errors.confirm?.message}</p>
            </div>
            <button type="submit">Mudar senha</button>
          </Form>
        </Main>
      </Content>
    </Container>
  )
}
