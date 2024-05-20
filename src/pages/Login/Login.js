import { Helmet } from 'react-helmet';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { LinkText, LinkToSignUp, LogFormWrap } from './Login.styled';

export default function Login() {
  return (
    <LogFormWrap>
      <Helmet>
        <title>Вхід</title>
      </Helmet>
      <LoginForm />
      <LinkText>Ще немає акаунту? <LinkToSignUp to="/register">Зареєструватися</LinkToSignUp></LinkText>
    </LogFormWrap>
  );
}