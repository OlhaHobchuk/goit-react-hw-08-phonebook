import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/user/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

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
    dispatch(register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.formContainer}>
      <form
        className={css.registerForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={css.formTitle}>
          Username
          <input
            className={css.formInput}
            type="text"
            name="name"
            value={name}
            placeholder="Please, enter your name"
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
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
          Register
        </button>
      </form>
    </div>
  );
};
