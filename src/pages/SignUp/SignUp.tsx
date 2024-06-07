import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../../services/firebaseConfig";
import {
  LoginWrapper,
  Text,
  Title,
  Paragraph,
  LoginForm,
  InputWrapper,
  PseudoLabel,
  Input,
  TextAndButton,
  PasswordText,
  Button,
  SignUpLink,
  WarningMessage
} from "../Login/Login.styled";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validEmail = email.includes('@');
  const validPassword = password.length >= 8;
  const checkPassword = password === confirmPasword;

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validEmail || !validPassword) {
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      if ((error as Error).message.includes("auth/email-already-in-use")) {
        setErrorMessage("Email is already in use.");
      } else {
        setErrorMessage("Error registering: " + (error as Error).message);
      }
    }
  };

  return (
    <LoginWrapper>
      <Text>
        <Title>Welcome</Title>
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
      </Text>
      <LoginForm onSubmit={handleRegister}>
        <InputWrapper>
          <PseudoLabel>User</PseudoLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@greenrun.com"
            required
            autoComplete="username"
          />
        </InputWrapper>
        <InputWrapper>
          <PseudoLabel>Password</PseudoLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="****************"
            required
            autoComplete="new-password"
          />
        </InputWrapper>
        <PasswordText>Password must have at least 8 characters</PasswordText>
        <InputWrapper>
          <PseudoLabel>Confirm Password</PseudoLabel>
          <Input
            type="password"
            value={confirmPasword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="****************"
            required
            autoComplete="new-password"
          />
        </InputWrapper>
        <WarningMessage>{errorMessage}</WarningMessage>
        {!checkPassword && <WarningMessage>Password don't match</WarningMessage>}
        <TextAndButton>
          <Button type="submit">Sign up</Button>
        </TextAndButton>
        <PasswordText>
          Already have an account? {" "}
          <SignUpLink href="/login">Click here</SignUpLink>
        </PasswordText>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
