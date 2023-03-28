import React, { useCallback, useContext, useState } from 'react'
import { Container, Content, Form, Logo } from './styles'
import { MdEmail } from 'react-icons/md'
import { IoMdLock } from 'react-icons/io'
import logo from '@/img/logo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { AuthContext } from '@/context/userContext'

/* separator */

const schema = z.object({
  email: z.coerce.string().email('Endereço de E-mail inválido'),
  password: z.coerce.string().min(6, 'Senha deve conter 6 dígitos'),
})

type FormData = z.infer<typeof schema>

/* separator */
axios.defaults.baseURL = 'http://localhost:3333/user'
export function LoginComponent() {
  const { setAuthorized, setUserData } = useContext(AuthContext)
  const [animation, setAnimation] = useState(true)
  const navigate = useNavigate()

  const onSubmit = useCallback(
    (data: FormData) => {
      axios
        .post('/login', data)
        .then((response) => {
          setAuthorized((prev) => !prev)
          setAnimation(false)
          setUserData(response.data.message)
          setTimeout(() => {
            navigate('/home')
          }, 1000)
        })
        .catch((error) => {
          console.error(error)
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
          <div>
            <input type="text" placeholder="E-mail" {...register('email')} />
            <span>{errors.email?.message}</span>
            <MdEmail size={18} />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              {...register('password')}
            />
            <span>{errors.password?.message}</span>
            <IoMdLock size={18} />
          </div>
          <button type="submit">ENTRAR</button>
        </Form>
      </Content>
    </Container>
  )
}
