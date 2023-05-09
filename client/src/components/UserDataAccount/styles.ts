import styled from 'styled-components'

export const Container = styled.div`
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
  & div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  & strong {
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    color: #ff3a5e;
    & span {
      margin-left: 4px;
      text-transform: lowercase;
      font-weight: 400;
    }
  }
`
