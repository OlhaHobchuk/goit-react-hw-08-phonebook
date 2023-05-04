import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/user/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.formContainer}>
      <form className={css.loginForm} onSubmit={handleSubmit}>
        <label className={css.formTitle}>
          Email
          <input
            className={css.formInput}
            type="email"
            name="email"
            placeholder="Please, enter your email"
            value={email}
            onChange={handleInputChange}
            title="Please enter valid email address, for example  'example@gmail.com'"
            min-length="6"
            required
          />
        </label>
        <label className={css.formTitle}>
          Password
          <input
            className={css.formInput}
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Please, enter your password"
            title="Please enter your password. Minimum length 8 symbols"
            min-length="8"
          />
        </label>
        <button className={css.submitButton} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};
