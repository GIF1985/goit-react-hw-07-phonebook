import { Form } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

import { useFilter } from 'hooks/useFilter';
import { useContacts } from 'hooks/useContacts';

import styles from './App.module.css';

export function App() {
  const [filter, onSetFilter] = useFilter();
  const [contacts, onAddContact, onDeleteContact] = useContacts();

  const empty = () => contacts.length > 0;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <Form onData={onAddContact} />
      <h2 className={styles.subtitle}>Contacts</h2>
      <Filter value={filter} onChangeFilter={onSetFilter} />
      {empty() ? (
        <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
      ) : (
        <h3 className={styles.emptyMessage}>
          Phonebook is empty! <br /> Add your contacts.
        </h3>
      )}
    </div>
  );
}
