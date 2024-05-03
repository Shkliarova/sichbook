import { Helmet } from 'react-helmet';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { LinkText, LinkToSignIn } from './Register.styled';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Реєстрація</title>
      </Helmet>
      <RegisterForm />
      <LinkText>Вже є акаунт? <LinkToSignIn to="/login">Увійти</LinkToSignIn></LinkText>
    </div>
  );
}