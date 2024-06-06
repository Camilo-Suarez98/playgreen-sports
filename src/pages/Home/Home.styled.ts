import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 10rem;
  margin-top: 3rem;
`;

export const DislikeButton = styled.button`
  border-radius: 5rem;
  border: none;
  width: 3.5rem;
  height: 3.5rem;
  background: ${({ theme }) => theme.color1};
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:active {
    transform: scale(1.2);
  }
`;

export const LikeButton = styled.button`
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 5rem;
  border: none;
  background: linear-gradient(125.02deg, #236bfe -17.11%, #063ba8 98.58%);
  box-shadow: 0px 10px 25px rgba(35, 107, 254, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:active {
    transform: scale(1.2);
  }
`;