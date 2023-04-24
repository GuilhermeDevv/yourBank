import styled from 'styled-components'
interface ILogo {
  Url_Logo: string
}
export const Container = styled.section`
  background-color: #040405;
  width: 100vw;
  height: 100vh;
`
export const Content = styled.div`
  max-width: fit-content;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80%;
  gap: 30px;
  & div:last-child {
    position: relative;
    display: flex;
    align-items: center;
    animation: shake 0.7s infinite;

    & path,
    svg {
      position: absolute;
      right: 10px;
      color: #ff3a5e;
    }
    &:hover {
      animation: none;
    }
  }
  & a {
    transition: scale 0.1s linear;
    outline: none;
    background-color: transparent;
    background: #09090b;
    color: #ff3a5e;
    border: solid 1px #101013;
    backdrop-filter: blur(10px);
    padding: 6px 64px;
    margin-left: 12px;
    max-width: 250px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 400;
  }
  @keyframes shake {
    0% {
      transform: skewX(0deg);
    }
    10% {
      transform: skewX(-5deg);
    }
    20% {
      transform: skewX(5deg);
    }
    30% {
      transform: skewX(-5deg);
    }
    40% {
      transform: skewX(5deg);
    }
    50% {
      transform: skewX(-5deg);
    }
    60% {
      transform: skewX(5deg);
    }
    70% {
      transform: skewX(-5deg);
    }
    80% {
      transform: skewX(5deg);
    }
    90% {
      transform: skewX(-5deg);
    }
    100% {
      transform: skewX(0deg);
    }
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
