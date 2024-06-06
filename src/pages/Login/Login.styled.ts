import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0.5rem;
  padding-inline: 2rem;
`;

export const Text = styled.section`
  text-align: center;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 42px;
  padding: 0;
  margin: 0;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  margin: 0;
  margin-bottom: 1rem;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const PseudoLabel = styled.span`
  position: absolute;
  top: 12px;
  left: 18px;
  font-size: 14px;
  font-weight: 700;
  opacity: 0.6;
`;

export const Input = styled.input`
  padding: 0.5rem;
  padding-top: 1.5rem;
  padding-left: 1.2rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 330px;
  height: 67px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.color1};
  color: ${({ theme }) => theme.text};

  &:focus {
    outline: none;
    border-color: none;
    box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
  }
`;

export const WarningMessage = styled.p`
  color: ${({ theme }) => theme.color4};
`;

export const TextAndButton = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const PasswordText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 19.52px;
  opacity: 0.8;
  margin-top: 0;
  text-align: left;
  width: 100%;
`;

export const Button = styled.button`
  padding: 22px 38px;
  gap: 10px;
  width: 122px;
  height: 66px;
  background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 80.95%);
  box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
  border-radius: 25px;
  border: none;
  cursor: pointer;
`;

export const SignUpLink = styled.a`
  color: #236bfe;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    font-weight: 600;
  }
`;