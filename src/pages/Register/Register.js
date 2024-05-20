import { Helmet } from 'react-helmet';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { LinkText, LinkToSignIn, RegFormWrap } from './Register.styled';

export default function Register() {
  return (
    <RegFormWrap>
      <Helmet>
        <title>Реєстрація</title>
      </Helmet>
      <RegisterForm />
      <LinkText>Вже є акаунт? <LinkToSignIn to="/login">Увійти</LinkToSignIn></LinkText>
    </RegFormWrap>
  );
}