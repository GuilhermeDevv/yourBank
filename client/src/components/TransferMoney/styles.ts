import styled from 'styled-components'
export const Container = styled.section`
  position: fixed;
  width: 100%;
  background-color: rgba(9, 9, 11, 0.95);
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  width: 90%;
  height: 90%;
  position: relative;
`
export const CloseConfig = styled.div`
  position: absolute;
  left: -10px;
  top: -5px;
  display: flex;
  border: solid 2px #ff3a5e;
  padding: 5px;
  border-radius: 50%;
  width: fit-content;
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  height: 100%;
  & h2 {
    font-size: 28px;
  }
`
export const Form = styled.form`
  display: flex;
  max-width: 1024px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  gap: 8px;

  & span {
    text-transform: uppercase;
    font-size: 32px;
  }

  & div {
    text-align: center;
    & input {
      border: none;
      outline: none;
      background-color: white;
      color: #101013;
      font-weight: bold;
      font-size: 16px;
      padding: 10px 0px;
      padding-left: 20px;
      border-radius: 10px;
      width: 280px;

      &::placeholder {
        text-transform: uppercase;
        font-size: 16px;
      }
    }
    & p {
      font-size: 16px;
      color: #ff3a5e;
    }
  }
  & button {
    border: 1px solid #ff3a5e;
    background-color: #ff3a5e;
    color: white;
    padding: 8px 64px;
    min-width: fit-content;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 400;
  }
`
