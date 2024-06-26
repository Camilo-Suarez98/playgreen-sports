import styled from "styled-components";

interface ButtonSelected {
  active: boolean;
}

export const MenuWrapper = styled.nav`
  background-color: ${({ theme }) => theme.color1};
  width: 100%;
  border-radius: 24px;
  z-index: 9999;
`;

export const ListMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 21rem;
  height: 85px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.color1};
  border-radius: 24px;
  padding: 0rem 1rem;
  list-style: none;
`;

export const LinkButton = styled.button<ButtonSelected>`
  background: ${({ active }) => active ? ({ theme }) => theme.color2 : 'transparent'};
  color: ${({ theme }) => theme.text2};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0.7rem;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.background};
  }
`;