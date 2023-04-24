import React, { useState } from 'react'
import { Container, Content, Form, Logo } from './styles'
import { MdEmail } from 'react-icons/md'
import { IoMdLock } from 'react-icons/io'
import logo from '@/img/logo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export function LoginComponent() {
  const navigate = useNavigate()
  const [animation, setAnimation] = useState(true)
  axios.defaults.baseURL = 'http://localhost:3333'
  return (
    <Container>
      <Content animation={animation}>
        <Form
          onSubmit={(d) => {
            setAnimation(false)
            d.preventDefault()
            setTimeout(() => {
              navigate('/home')
            }, 1000)
          }}
        >
          <Logo Url_Logo={logo} />
          <h1>ACESSE SUA CONTA</h1>
          <div>
            <input type="text" placeholder="Email" />
            <span></span>
            <MdEmail size={18} />
          </div>
          <div>
            <input type="password" placeholder="Password" />
            <span></span>
            <IoMdLock size={18} />
          </div>
          <button type="submit">ENTRAR</button>
        </Form>
      </Content>
    </Container>
  )
}
