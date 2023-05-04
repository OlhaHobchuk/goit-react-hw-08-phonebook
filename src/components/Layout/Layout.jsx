import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../../components/AppBar/AppBar';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.layoutContainer}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
