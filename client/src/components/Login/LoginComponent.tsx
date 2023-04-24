import React, { useState } from 'react'
import { Container, Content, Form, Logo } from './styles'
import { MdEmail } from 'react-icons/md'
import { IoMdLock } from 'react-icons/io'
import logo from '@/img/logo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

/* separator */

const schema = z.object({
  email: z.coerce.string().email('Endereço de E-mail invalido'),
  password: z.coerce.string().min(6, 'Senha deve conter 6 dígitos '),
})
type FormData = z.infer<typeof schema>

/* separator */

export function LoginComponent() {
  const navigate = useNavigate()
  const [animation, setAnimation] = useState(true)
  axios.defaults.baseURL = 'http://localhost:3333/user'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  function onSubmit(data: FormData) {
    axios
      .post('/login', data)
      .then(() => {
        setAnimation(false)
        setTimeout(() => {
          navigate('/home')
        }, 1000)
      })
      .catch(() => {
        window.location.reload()
      })
  }
  return (
    <Container>
      <Content animation={animation}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Logo Url_Logo={logo} />
          <h1>ACESSE SUA CONTA</h1>
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
          <button type="submit">ENTRAR</button>
        </Form>
      </Content>
    </Container>
  )
}
