import styled from 'styled-components'
interface IInfo {
  stateAnimation: true | false
}
interface IForm {
  stateAnimation: true | false
}
export const Container = styled.main`
  background-color: #000;
  width: 100vw;
  height: 100vh;
`
export const Content = styled.section`
  max-width: 1024px;
  overflow: hidden;
  max-height: 600px;
  border-radius: 18px;
  border: solid 1px #09090b;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  height: 80%;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 100vh;
  }
`
export const Info = styled.aside<IInfo>`
  position: relative;
  width: 50%;
  height: 100%;
  background-color: #09090b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 18px 0px 0px 18px;
  padding: 12px 0px;
  animation: ${({ stateAnimation }) =>
      stateAnimation ? 'leftToCenter' : 'closeInfo'}
    forwards 1s ease;
  @keyframes leftToCenter {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    border-radius: 0;
    animation: ${({ stateAnimation }) =>
        stateAnimation ? 'TopToCenter' : 'closeInfoMobile'}
      forwards 1s ease;
    @keyframes TopToCenter {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0%);
      }
    }
    @keyframes closeInfoMobile {
      from {
        transform: translateY(0%);
      }
      to {
        transform: translateY(-100%);
      }
    }
  }
  & h1 {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 28px;
    width: 70%;
    color: #ff3a5e;
    text-align: center;
  }
  & h2 {
    font-size: 16px;
    width: 70%;
    text-align: center;
  }
  & button {
    border: solid 1px #ff3a5e;
    background-color: #09090b;
    color: white;
    padding: 8px 64px;
    min-width: fit-content;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 400;
  }

  @keyframes closeInfo {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`
export const Form = styled.form<IForm>`
  position: relative;
  width: 50%;
  background-color: #ff3a5e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 0px 18px 18px 0px;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    border-radius: 0;
    animation: ${({ stateAnimation }) =>
        stateAnimation ? 'BottomToCenter' : 'closeFormMobile'}
      forwards 1s ease;
    @keyframes BottomToCenter {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0%);
      }
    }
    @keyframes closeFormMobile {
      from {
        transform: translateY(0%);
      }
      to {
        transform: translateY(100%);
      }
    }
  }

  animation: ${({ stateAnimation }) =>
      stateAnimation ? 'RightToCenter' : 'closeForm'}
    forwards 1s ease;
  @keyframes RightToCenter {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }
  & h1 {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 28px;
    width: 70%;
    color: #09090b;
    text-align: center;
  }
  & div {
    position: relative;
    & svg,
    path {
      width: 20px;
      height: 20px;
      position: absolute;
      left: 8px;
      top: 8px;
      color: #09090b;
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
  }
  & button {
    background-color: #ff3a5e;
    color: white;
    border: solid 1px #09090b;
    padding: 8px 64px;
    margin-left: 12px;
    min-width: fit-content;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 400;
  }
  @keyframes closeForm {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(100%);
    }
  }
`
