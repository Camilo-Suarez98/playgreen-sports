import styled from "styled-components";

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 3rem 1rem 0 1rem;
  transition: all 0.2s ease-in-out;

  @media (min-width: 767px) {
    padding: 7rem 1rem 5rem 1rem;
  };
`;

export const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: none;

  cursor: pointer;

  &:hover {

  };
`;

export const Text = styled.p`
  font-size: 18px;
  margin: 0;
`;

export const DateParagraph = styled.p`
  font-size: 14px;
  margin: 0;

  @media (min-width: 425px) {
    font-size: 18px;
  }
`;

export const CardsWarpper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0;

  @media (min-width: 425px) {
    width: 100%;
  };
`;

export const CardSport = styled.li`
  display: flex;
  width: 22rem;
  height: 4rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.color1};
  display: flex;
  font-size: 24px;
  color: #FFFFFF;

  @media (min-width: 425px) {
    width: 100%;
  };
`;

export const SportImage = styled.div`
  width: 80%;
  height: 4rem;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.5);
  };

  @media (min-width: 425px) {
    width: 85%;
  };
`;

export const SportName = styled.p`
  position: absolute;
  margin-top: 1.1rem;
  margin-left: 1rem;
  font-weight: 700;
  font-size: 24px;
  line-height: 122.02%;
  letter-spacing: -0.045em;
  color: #FEFEFE;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;

  @media (min-width: 425px) {
    width: 15%;
  };
`;