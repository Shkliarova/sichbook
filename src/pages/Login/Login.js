import { Helmet } from 'react-helmet';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { LinkText, LinkToSignUp } from './Login.styled';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Вхід</title>
      </Helmet>
      <LoginForm />
      <LinkText>Ще немає акаунту? <LinkToSignUp to="/register">Зареєструватися</LinkToSignUp></LinkText>
    </div>
  );
}