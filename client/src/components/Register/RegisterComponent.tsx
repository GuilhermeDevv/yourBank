import React, { useState } from 'react'
import { Container, Content, Form, Info } from './styles'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoMdLock } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import axios from 'axios'
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
  const navigate = useNavigate()
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
      .post('/register', data)
      .then(() => {
        setTransition(!transition)
        setTimeout(() => {
          navigate('/login')
        }, 1000)
      })
      .catch(() => {
        window.location.reload()
      })
  }
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
      </Content>
    </Container>
  )
}
