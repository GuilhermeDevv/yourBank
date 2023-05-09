import styled from 'styled-components'
interface ILogo {
  Url_Logo: string
}
interface IInfoUser {
  visibilityMoney: boolean
}
interface IContentInfoUser {
  visibilityMenu: boolean
  displayLoadMenu: boolean
}
interface IMoneyStatus {
  color: string
}
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
`
export const Content = styled.div`
  animation: 1s ease grow;
  @keyframes grow {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`

export const Logo = styled.div<ILogo>`
  width: 50px;
  height: 50px;
  background-image: url(${({ Url_Logo }) => Url_Logo});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`
export const Header = styled.header`
  padding: 14px;
  height: 78px;
  min-height: 100%;
  background-color: #09090b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 30px;
  & button {
    padding: 4px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 20px;
    font-weight: 400;
    font-size: 16px;
    height: fit-content;
    color: white;
    background-color: #000;
    border: solid 1px #ff3a5e;
    text-transform: uppercase;
  }
`
export const InfoUser = styled.aside<IInfoUser>`
  width: 100%;
  background-color: #ff3a5e;
  max-height: 92px;
  height: 100%;
  padding: 14px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;

  & span {
    opacity: 0.9;
    font-size: 16px;
    font-weight: 400;
  }
  & div {
    display: flex;
    width: fit-content;
    gap: 8px;
    align-items: center;
    & strong {
      position: relative;
      font-size: 22px;
      font-weight: 400;
    }
  }
`
export const Menu = styled.div`
  @media (max-width: 1024px) {
    visibility: visible;
    position: absolute;
    right: 15px;
    top: 30px;
  }
  visibility: hidden;
`
export const Main = styled.main`
  overflow: hidden !important;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  min-height: calc(100vh - (92px + 78px));
  background-color: #09090b;
  padding: 30px 0px;
  padding-bottom: 0px;
  & div {
    display: flex;
    justify-content: center;
    gap: 16px;
    width: 100%;
    @media (max-width: 768px) {
      justify-content: start;
    }
    position: relative;
    & button {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: -60px;
      width: 50px;
      height: 50px;
      background-color: #09090b;
      border: solid 1px #ff3a5e;
      border-radius: 50%;
      cursor: pointer;
      font-size: 24px;
      z-index: 2;
      & svg,
      polyline {
        stroke: white;
        position: relative;
        top: 2px;
      }
    }
    & button:first-child {
      left: 0;
    }
    & button:last-child {
      right: 0;
    }
  }
  & section {
    margin-left: 30px;
    display: flex;

    overflow: hidden !important;
    gap: 16px;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      margin: 0;
    }
  }
`
export const ContainerMoneyStatus = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start !important;
  align-items: center;
  height: 100%;
  @media (max-width: 1024px) {
    margin-top: 60px;
    justify-content: center !important;
  }
`
export const MoneyStatus = styled.aside<IMoneyStatus>`
  display: flex;
  flex-direction: column;
  padding: 21px;
  border-radius: 10px;
  max-width: 410px;
  width: 100%;
  height: 100%;
  background-color: #09090b;
  border: solid 2px #101013;
  gap: 12px;
  & div:first-child {
    display: flex;
    align-items: center;
    text-transform: capitalize;

    & h3 {
      font-size: 16px;
      font-weight: 600;
    }
    & span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #ff3a5e;
    }
    & h6 {
      font-size: 16px;
      font-weight: 400;
    }
  }
  & div:nth-child(2) {
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 4px;
    & span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${({ color }) => color};
      margin-right: 6px;
    }
    & h3 {
      font-size: 18px;
      font-weight: 600;
    }
  }
  & span:last-child {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
  }
`
export const ContentInfoUser = styled.nav<IContentInfoUser>`
  background-color: #09090b;
  border: solid 2px #101013;
  border-radius: 15px;
  max-width: 320px;
  width: 100%;
  height: max-content;
  display: flex;
  padding: 15px;
  padding-top: 0;
  flex-direction: column;
  gap: 4px;
  transition: all 1s;
  @media (max-width: 1024px) {
    position: fixed;
    top: calc(92px + 78px);
    right: 0;
    z-index: 2;
    transform: translateX(
      ${({ visibilityMenu }) => (visibilityMenu ? '100%' : '0%')}
    );
    visibility: ${({ displayLoadMenu }) =>
      displayLoadMenu ? 'visible' : 'hidden'};
  }
  & div {
    display: flex;
    cursor: pointer;
    width: 100%;
    flex-direction: row;
    justify-content: start;
    padding: 15px;
    align-items: center;
    gap: 8px;
    border-bottom: solid 2px #ff3a5e;
    transition: all ease 0.3s;
    & svg,
    path,
    line {
      color: #ff3a5e;
    }
    & span {
      font-size: 16px;
      font-weight: 400;
      text-transform: uppercase;
      color: white;
    }
    &:hover {
      transform: translateX(10px);
    }
  }
`
