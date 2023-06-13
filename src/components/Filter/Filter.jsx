import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={styles.filterContainer}>
      Find contacts by name
      <input
        className={styles.field}
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="Enter contact"
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
