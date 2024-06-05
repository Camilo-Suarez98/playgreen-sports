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
  Button
} from "./Login.styled";

const Login = () => {
  return (
    <LoginWrapper>
      <Text>
        <Title>Welcome</Title>
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
      </Text>
      <LoginForm>
        <InputWrapper>
          <PseudoLabel>User</PseudoLabel>
          <Input type="email" id="email" />
        </InputWrapper>
        <InputWrapper>
          <PseudoLabel>Password</PseudoLabel>
          <Input type="password" id="password" />
        </InputWrapper>
        <TextAndButton>
          <PasswordText>Forgot your password?</PasswordText>
          <Button>Login</Button>
        </TextAndButton>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
