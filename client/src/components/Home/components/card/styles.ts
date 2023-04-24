import styled from 'styled-components'

export const Container = styled.section``
export const Content = styled.div`
  &:hover {
    transform: translateY(-10px);
  }
  animation: grow 1.7s ease;
  @keyframes grow {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  & span {
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
  }
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  min-width: 151px;
  height: 131px;
  padding: 14px;
  background-color: #000;
  border: 2px solid #101013;
  border-radius: 10px;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 70px;
    min-height: 70px;
    width: 100%;
    height: 100%;
    background-color: #101013;
    border-radius: 50%;
    & span {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      color: blue;
    }

    & svg,
    path {
      color: #ff3a5e;
      stroke: #ff3a5e;
    }
  }
`
