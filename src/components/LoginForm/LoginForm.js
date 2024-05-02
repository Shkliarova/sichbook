import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { TextField, Button } from '@mui/material';
import { LoginFormSt } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginFormSt onSubmit={handleSubmit} autoComplete="off">
      <TextField id="standard-basic" label="Email" variant="standard" type="email" name="email"/>
      <TextField id="standard-basic" label="Password" variant="standard" type="password" name="password"/>
      <Button variant="contained" type="submit" style={{marginTop: "24px"}}>Вхід</Button>
    </LoginFormSt>
  );
};
