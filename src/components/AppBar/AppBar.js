import { Navigation } from '../Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav';
import { useAuth } from '../../hooks/useAuth';
import {Toolbar} from '@mui/material';
import { Header } from './AppBar.styled';

export const Appbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header position="static">
      <Toolbar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </Header>
  );
};