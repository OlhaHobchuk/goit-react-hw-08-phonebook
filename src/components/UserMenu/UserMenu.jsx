import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/user/operations';
import { useAuth } from '../../redux/user/selectors';
import greetingImage from '../../images/3190291-removebg-preview.png';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.userMenuContainer}>
      <img src={greetingImage} width="30" alt="greeting" />
      <p className={css.username}>Welcome, {user.name}</p>
      <button
        type="button"
        className={css.logOutButton}
        onClick={() => dispatch(logOut())}
      >
        Log out
      </button>
    </div>
  );
};
