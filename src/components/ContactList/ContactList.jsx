import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={styles.contactContainer}>
      {contacts.map(({ id, name, number, createdAt }) => (
        <div key={id} className={styles.contactItem}>
          <span className={styles.contactName}>{name}: </span>
          <span>{number}</span>
          <span className={styles.contactCreatedAt}>
            Created: {new Date(createdAt).toLocaleString()}
          </span>
          <button
            type="button"
            className={styles.contactButton}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
