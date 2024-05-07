import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'))

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Завантаження...</div>}>
      {isRefreshing ? <Loader/> : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
            />
          </Route>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      )}
    </Suspense>
  );
};