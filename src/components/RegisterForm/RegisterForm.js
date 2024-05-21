import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Button } from '@mui/material';
import { RegForm, RegisterField } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegForm onSubmit={handleSubmit} autoComplete="off">
      <RegisterField id="standard-basic" label="Ім'я користувача" variant="standard" type="text" name="name"/>
      <RegisterField id="standard-basic" label="Імейл" variant="standard" type="email" name="email"/>
      <RegisterField id="standard-basic" label="Пароль" variant="standard" type="password" name="password"/>
      <Button variant="contained" type="submit" style={{marginTop: "24px"}}>Реєстрація</Button>
    </RegForm>
  );
};