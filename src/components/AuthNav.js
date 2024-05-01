import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div style={{marginLeft: 'auto'}}>
      <NavLink to="/register">
        <Button variant="outlined" color='inherit'>Реєстрація</Button>
      </NavLink>
      <NavLink to="/login">
        <Button variant="outlined" color='inherit' style={{marginLeft: '8px'}}>Вхід</Button>
      </NavLink>
    </div>
  );
};