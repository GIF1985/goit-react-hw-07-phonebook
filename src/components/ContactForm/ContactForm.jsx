import React, { useState } from 'react';
import styles from './ContactForm.module.css';

export function Form({ onData }) {
  const initialState = {
    name: '',
    number: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { name, number } = state;
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!isValidName(name) || !isValidNumber(number)) {
      setErrorMessage('Invalid name or number');
      return;
    }

    onData({ ...state });
    setState({ ...initialState });
    setErrorMessage('');
  };

  const isValidName = value => {
    const nameRegex =
      /^[a-zA-ZА-Яа-яЁё]+(([' -][a-zA-ZА-Яа-яЁё ])?[a-zA-ZА-Яа-яЁё]*)*$/;
    return nameRegex.test(value);
  };

  const isValidNumber = value => {
    const numberRegex =
      /^\+?[0-9]{1,3}[-\s]?\(?[0-9]{1,3}\)?[-\s]?[0-9]{1,4}[-\s]?[0-9]{1,4}[-\s]?[0-9]{1,9}$/;
    return numberRegex.test(value);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.fieldContainer}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          required
          placeholder="Enter name"
          className={styles.input}
          onChange={handleChange}
        />
      </div>
      <div className={styles.fieldContainer}>
        <label htmlFor="number" className={styles.label}>
          Number
        </label>
        <input
          type="tel"
          id="number"
          name="number"
          value={number}
          required
          placeholder="Enter number"
          className={styles.input}
          onChange={handleChange}
        />
      </div>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <button
        type="submit"
        disabled={!name || !number}
        className={styles.button}
      >
        Add contact
      </button>
    </form>
  );
}
