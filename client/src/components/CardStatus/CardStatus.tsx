import { Container, Content } from './styles'
interface ICard {
  src: string
  text: string
  status: string
  cor: string
  fnCallback: () => void
}
export function CardStatus({ src, text, status, cor, fnCallback }: ICard) {
  return (
    <Container>
      <Content color={cor}>
        <div>
          <img src={src} />
        </div>
        <h2>{status}</h2>
        <p>{text}</p>
        <button
          onClick={() => {
            fnCallback()
          }}
        >
          CONFIRMAR
        </button>
      </Content>
    </Container>
  )
}
