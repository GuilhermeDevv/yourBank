import styled from 'styled-components'

interface IContentProps {
  color: string
}

export const Container = styled.div`
  position: fixed;
  inset: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`

export const Content = styled.div<IContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 380px;
  max-width: 100%;
  height: 460px;
  background: #000;
  text-align: center;
  padding: 50px 30px;
  margin-bottom: 30px;
  border-radius: 8px;
  border: solid 1px #101013;
  gap: 8px;
  & div {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 28px;
    border: solid 2px ${({ color }) => color};
    border-radius: 50%;
  }
  & h2 {
    color: ${({ color }) => color};
    font-weight: 400;
    text-transform: uppercase;
    font-size: 28px;
  }
  & p {
    color: white;
    font-size: 18px;
    font-weight: 400;
  }
  & button {
    margin-top: 16px;
    background: ${({ color }) => color};
    border: solid 1px ${({ color }) => color};
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    padding: 8px 22px;
    font-size: 16px;
    border-radius: 4px;
    color: ${({ color }) => (color === 'yellow' ? 'black' : 'white')};
    transition: scale 0.2s ease-in-out;
    &:focus {
      scale: 1.05;
    }
  }
`
