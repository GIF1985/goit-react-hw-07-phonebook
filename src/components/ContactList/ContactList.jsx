import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={styles.contactContainer}>
      {contacts.map(({ id, name, phone, createdAt }) => (
        <div className={styles.contactEl} key={id}>
          <button
            className={styles.contactBtn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
          <span className={styles.contactPhone}>{phone} :</span>
          <span className={styles.contactName}>{name}, </span>
          <span className={styles.contactCreatedAt}>
            Created at: {new Date(createdAt).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
