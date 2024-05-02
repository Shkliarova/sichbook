import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { TextField, Button } from '@mui/material';
import { RegForm } from './RegisterForm.styled';

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
      <TextField id="standard-basic" label="Username" variant="standard" type="text" name="name"/>
      <TextField id="standard-basic" label="Email" variant="standard" type="email" name="email"/>
      <TextField id="standard-basic" label="Password" variant="standard" type="password" name="password"/>
      <Button variant="contained" type="submit" style={{marginTop: "24px"}}>Реєстрація</Button>
    </RegForm>
  );
};