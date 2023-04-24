import React, { useState } from 'react'
import { Container, Content, Form, Info } from './styles'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoMdLock } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

export function RegisterComponent() {
  const [transition, setTransition] = useState(true)
  const navigate = useNavigate()
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
        <Form action="" stateAnimation={!!transition}>
          <h1>Crie sua conta!</h1>
          <div>
            <input type="text" placeholder="Name" />
            <span></span>
            <FaUser size={18} />
          </div>
          <div>
            <input type="text" placeholder="Email" />
            <span></span>
            <MdEmail size={18} />
          </div>
          <div>
            <input type="password " placeholder="Password" />
            <span></span>
            <IoMdLock size={18} />
          </div>
          <button type="submit">CADASTRE-SE</button>
        </Form>
      </Content>
    </Container>
  )
}
