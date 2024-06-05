import styled from "styled-components";

export const MenuWrapper = styled.nav`
  background-color: ${({ theme }) => theme.color1};
  width: 100%;
  border-radius: 24px;
`;

export const ListMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 21rem;
  height: 85px;
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.color1};
  border-radius: 24px;
  padding: 0rem 1rem;
  list-style: none;
`;