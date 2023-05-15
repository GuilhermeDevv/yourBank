import styled from 'styled-components'
interface ILogo {
  Url_Logo: string
}
interface IContent {
  animation: boolean
}
interface IAside {
  animation: boolean
}
export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #000;
`
export const Content = styled.section<IContent>`
  max-width: 1024px;
  overflow: hidden;
  max-height: 600px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #09090b;
  border: 1px solid #101013;
  border-radius: 18px;
  animation: ${({ animation }) => (animation ? 'grow' : 'lower')} 1s ease
    forwards;
  @keyframes grow {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  @keyframes lower {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0);
    }
  }
`
export const Form = styled.form`
  position: absolute;
  top: -50px;
  height: 100%;
  width: 100%;
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h1 {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 22px;
    width: 70%;
    color: #ff3a5e;
    text-align: center;
  }
  & button {
    border: solid 1px #ff3a5e;
    background-color: #ff3a5e;
    color: white;
    padding: 8px 64px;
    min-width: fit-content;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 400;
  }
`
export const ContainerInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  & span {
    font-size: 14px;
    font-weight: 400;
  }

  & input {
    background-color: transparent;
    border: none;
    outline: none;
    background-color: white;
    color: #101013;
    font-weight: bold;
    padding: 10px 35px;
    border-radius: 10px;
    &::placeholder {
      color: #09090b;
    }
  }
`
export const Icon = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 10px;

  & svg,
  path {
    position: relative;
    left: -90px;
    color: black;
  }
  .visibility {
    position: relative;
    top: -1px;
    right: -180px;
  }
`

export const Logo = styled.div<ILogo>`
  width: 200px;
  height: 150px;
  background-image: url(${({ Url_Logo }) => Url_Logo});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`
export const Aside = styled.aside<IAside>`
  width: 100%;
  height: 100%;
  animation: ${({ animation }) => (animation ? 'grow' : '')} 1s ease forwards;
  @keyframes grow {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`
