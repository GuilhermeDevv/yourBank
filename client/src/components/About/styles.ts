import styled from 'styled-components'
interface IMyPicture {
  img: string
}
export const Container = styled.div`
  background-color: #000;
  width: 100%;
  min-height: 100vh;
`
export const Content = styled.div`
  inset: 0;
  margin: 0 auto;
  min-height: 100%;
`
export const GeneralInformation = styled.div`
  display: flex;
  min-height: 100vh;
  gap: 32px;
  align-items: center;
  justify-content: center;
  @media (max-width: 1280px) {
    padding: 0px 32px;
  }
  @media (max-width: 884px) {
    flex-direction: column;
    align-items: center;
    padding: 16px;
  }
`
export const AboutYourBank = styled.div`
  width: 50%;
  position: relative;
  top: -60px;
  & h1 {
    color: #ff3a5e;
    font-size: 62px;
  }
  & p {
    font-size: 18px;
    & span {
      color: #ff3a5e;
    }
  }
  @media (max-width: 884px) {
    width: 100%;
    padding: 32px;
    top: 0px;
  }
  @media (max-width: 428px) {
    width: 100%;
    padding: 0px;
    top: 0px;
  }
`

export const MyPicture = styled.div<IMyPicture>`
  background-color: #09090b;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: solid 1px #101013;
  border-radius: 22px;
  width: 620px;
  height: 520px;
  margin-bottom: 64px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 428px) {
    width: 90%;
    height: 310px;
  }
`

export const Copyright = styled.div`
  padding: 15px;
  position: fixed;
  background-color: #090909;
  border: solid 1px #101013;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  & span {
    font-size: 14px;
    font-weight: 400;
  }
  & a {
    color: #ff3a5e;
    text-decoration: underline;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }
`
