import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Loader } from '../../components/Loader/Loader';
import { Notification } from '../../components/Notification/Notification';
import css from './Contacts.module.css';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subTitle}>Contacts</h2>
      {loading && !error && <Loader />}

      {contacts.length ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Notification message="There are no contacts" />
      )}
    </div>
  );
};

export default Contacts;
