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
`;

export const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: none;
`;

export const Text = styled.p`
  font-size: 18px;
  margin: 0;
`;

export const DateParagraph = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const CardSport = styled.li`
  display: flex;
`;

export const SportImage = styled.img`
  width: 18rem;
  object-fit: cover;
`;

export const LoaderWrapper = styled.div`
  z-index: 1;
`;