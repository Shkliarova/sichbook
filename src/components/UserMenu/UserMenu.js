import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Typography, Button } from '@mui/material';
import { UserMenuWrap } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrap>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Привіт, {user.name}</Typography>
      <Button variant="outlined" color='inherit' type="button" onClick={() => dispatch(logOut())}>Вийти</Button>
    </UserMenuWrap>
  );
};