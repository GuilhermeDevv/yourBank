import React from 'react'
import logo from '@/img/logo.png'
import { SlLogin } from 'react-icons/sl'
import { Container, Content, Logo } from './styles'
import { NavLink } from 'react-router-dom'

export function AccessComponent() {
  return (
    <Container>
      <Content>
        <Logo Url_Logo={logo} />
        <div>
          <NavLink to="/acesso">ACESSAR</NavLink>
          <SlLogin size={20} />
        </div>
      </Content>
    </Container>
  )
}
