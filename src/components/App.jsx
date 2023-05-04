import { useDispatch } from 'react-redux/es/exports';
import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import { refreshUser } from '../redux/user/operations';
import { useAuth } from '../redux/user/selectors';
import { RestrictedRoute } from '../components/RestrictedRoute/RestrictedRoute';
const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
