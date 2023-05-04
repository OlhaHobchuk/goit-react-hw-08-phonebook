import React from 'react';
import PropTypes from 'prop-types';
import NotFoundResults from '../../images/46334165-removebg-preview.png';
import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <div className={css.notificationContainer}>
      <p className={css.notificationText}>{message}</p>{' '}
      <img src={NotFoundResults} width="200" alt="There are no results" />
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
