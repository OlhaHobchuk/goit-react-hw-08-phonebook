import { NavLink } from 'react-router-dom';
import { useAuth } from '../../redux/user/selectors';
import { BsFillHouseFill } from 'react-icons/bs';

import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navigation}>
      <NavLink className={css.link} to="/">
        <BsFillHouseFill className={css.homeIcon} />
      </NavLink>

      {isLoggedIn && (
        <NavLink className={css.navigationLink} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
