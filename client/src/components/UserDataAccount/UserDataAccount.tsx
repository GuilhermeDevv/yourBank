import { AuthContext } from '@/context/userContext'
import { formatCurrency } from '@/utils/formatMoney'
import { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'
import { CloseConfig, Container, Content, Main } from './styles'
type ConfigUserAccountProps = {
  fnVisibilityDataUserAccount: (v: boolean) => void
}
export function UserDataAccount({
  fnVisibilityDataUserAccount,
}: ConfigUserAccountProps) {
  const { userData } = useContext(AuthContext)
  return (
    <Container>
      <Content>
        <CloseConfig
          onClick={() => {
            fnVisibilityDataUserAccount(false)
          }}
        >
          <AiOutlineClose size={30} />
        </CloseConfig>
        <Main>
          <h2>
            Olá, <span>{userData.name}</span>
          </h2>
          <BsPersonCircle size={40} />
          <div>
            <strong>
              Sua chave pix/E-mail:
              <span>{userData.email}</span>
            </strong>
            <strong>
              Seu saldo:
              <span>{formatCurrency(userData.balance)}</span>
            </strong>
          </div>
        </Main>
      </Content>
    </Container>
  )
}
