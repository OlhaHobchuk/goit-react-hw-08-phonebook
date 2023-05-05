import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Notiflix from 'notiflix';
import { AppBar } from '../../components/AppBar/AppBar';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAuth } from '../../redux/user/selectors';
import { selectIsLoading, selectError } from '../../redux/contacts/selectors';
import { Loader } from '../Loader/Loader';
import css from './Layout.module.css';

export const Layout = () => {
  const contactsLoading = useSelector(selectIsLoading);
  const contactsError = useSelector(selectError);
  const { isLoading } = useAuth();

  useEffect(() => {
    if (contactsError) {
      Notiflix.Notify.warning('Something wrong!');
    }
  }, [contactsError]);

  return (
    <div className={css.layoutContainer}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {isLoading || (contactsLoading && <Loader />)}
    </div>
  );
};
