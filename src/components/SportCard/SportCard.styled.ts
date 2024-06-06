import styled from "styled-components";

export const SportInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 32px;
  height: 65%;
  width: 100%;
  overflow: hidden;
`;

export const SportImage = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const SportName = styled.p`
  width: 100%;
  height: 35px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(8, 8, 8, 1) 55%,
    rgba(255, 255, 255, 0) 100%
  );
  color: #FFFFFF;
  margin: 0;
  padding: 1.2rem;
  font-weight: 700;
  font-size: 34px;
  line-height: 122.02%;
  padding-top: 50px;
`;