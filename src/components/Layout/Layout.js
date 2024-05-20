import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Appbar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { LayoutWrap } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutWrap>
      <Appbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster reverseOrder={false} />
    </LayoutWrap>
  );
};