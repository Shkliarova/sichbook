import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { UserMenuWrap, LogOutSVG, LogOutBtn } from './UserMenu.styled';
import { Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrap>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Привіт, {user.name}
      </Typography>
      <LogOutBtn variant="outlined" color='inherit' type="button" onClick={() => dispatch(logOut())}>Вийти 
        <LogOutSVG/>
      </LogOutBtn>
    </UserMenuWrap>
  );
};