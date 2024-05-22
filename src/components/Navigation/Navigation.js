import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { NavBtn } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">
        <Button variant='text' color='inherit'>
        <HomeIcon sx={{ fontSize: 28, color: "white"}}/>
        </Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <NavBtn variant='text' color='inherit'>Контакти</NavBtn>
        </NavLink>
      )}
    </nav>
  );
};
