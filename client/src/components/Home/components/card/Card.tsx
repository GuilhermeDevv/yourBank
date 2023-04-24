import { Container, Content } from './styles'

export function Card({ Icon, name }: { Icon: any; name: string }) {
  return (
    <Container>
      <Content>
        <div>
          <Icon size={25} />
        </div>
        <span>{name}</span>
      </Content>
    </Container>
  )
}
