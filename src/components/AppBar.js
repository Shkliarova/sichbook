import { Navigation } from '../components/Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { AuthNav } from '../components/AuthNav';
import { useAuth } from '../hooks/useAuth';
import {AppBar, Toolbar} from '@mui/material';

export const Appbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};