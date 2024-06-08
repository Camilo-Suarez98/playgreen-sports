import styled from "styled-components";

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1rem;
  z-index: 9999;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: none;
  border-radius: 18px;
  padding: 0.5rem;
  font-size: 26px;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color1};
  }
`;