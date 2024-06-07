import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
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
  WarningMessage,
  TextAndButton,
  PasswordText,
  Button,
  SignUpLink
} from "./Login.styled";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validEmail = email.includes('@');
  const validPassword = password.length >= 8;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validEmail || !validPassword) {
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      throw new Error(`Sorry, the following error has ocurred: ${error}`);
    }
  };

  return (
    <LoginWrapper>
      <Text>
        <Title>Welcome</Title>
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
      </Text>
      <LoginForm onSubmit={handleLogin}>
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
            autoComplete="current-password"
          />
        </InputWrapper>
        {!validPassword || !validEmail &&
          <WarningMessage>Email or password is invalid</WarningMessage>
        }
        <TextAndButton>
          <PasswordText>Forgot your password?</PasswordText>
          <Button type="submit">Login</Button>
        </TextAndButton>
        <PasswordText>
          Don't you have an account? {" "}
          <SignUpLink href="/sign-up">Click here</SignUpLink>
        </PasswordText>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
