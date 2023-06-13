import { useState } from 'react';
import styles from './Form.module.css';

export function Form({ onData }) {
  const initialState = {
    name: '',
    phone: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { name, phone } = state;
  const [errors, setErrors] = useState({ name: '', phone: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = { name: '', phone: '' };

    if (!name) {
      newErrors.name = 'Please enter a name';
      hasErrors = true;
    } else if (name.length < 2) {
      newErrors.name = 'Name must contain at least 2 letters';
      hasErrors = true;
    }

    if (!phone) {
      newErrors.phone = 'Please enter a phone number';
      hasErrors = true;
    } else if (!/^\d+$/.test(phone)) {
      newErrors.phone = 'Phone number should only contain digits';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    onData({ ...state });
    setState({ ...initialState });
  };

  return (
    <form className={styles.containerForm} onSubmit={handleSubmit}>
      <div className={styles.containerField}>
        Phone number
        <input
          className={styles.fieldItem}
          type="tel"
          name="phone"
          value={phone}
          pattern="^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          onChange={handleChange}
        />
        {errors.phone && <p className={styles.error}>{errors.phone}</p>}
      </div>
      <div className={styles.containerField}>
        Name
        <input
          className={styles.fieldItem}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]{2,}([' -][a-zA-Zа-яА-Я]+)*$"
          title="Name must contain at least 2 letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          onChange={handleChange}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
      </div>
      <button
        className={styles.btnDisabled}
        type="submit"
        disabled={!name || !phone}
      >
        Add contact
      </button>
    </form>
  );
}
