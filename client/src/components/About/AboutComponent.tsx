import {
  AboutYourBank,
  Container,
  Content,
  Copyright,
  GeneralInformation,
  MyPicture,
} from './styles'
import I from '@/img/I.jpg'
export function AboutComponent() {
  return (
    <Container>
      <Content>
        <GeneralInformation>
          <AboutYourBank>
            <h1>Sobre a YourBank</h1>
            <p>
              A <span>YourBank</span> foi criada em abril de 2023 com o objetivo
              de preencher o tempo livre. Um jovem que não tinha acesso à
              internet para estudar decidiu criar a <span>YourBank</span> para
              preencher o seu tempo e aprimorar seus conhecimentos.
            </p>
            <br />
            <p>
              Este site não iria ser lançado ao público, ele seria apenas
              adicionado ao meu currículo e repositório. No entanto, após uma
              postagem no LinkedIn, muitas pessoas pediram para testá-lo e, como
              um bônus, cada usuário receberá R$ 100,00 para poder experimentar
              o site.
            </p>
          </AboutYourBank>
          <MyPicture img={I} />
        </GeneralInformation>
        <Copyright>
          <span>Criado e desenvolvido pelo </span>
          <a href="https://www.linkedin.com/in/guidev-onn/" target={'_blank'}>
            Guilherme.
          </a>
        </Copyright>
      </Content>
    </Container>
  )
}
