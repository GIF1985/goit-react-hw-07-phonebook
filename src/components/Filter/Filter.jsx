import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={styles.filterContainer}>
      Find contacts by name
      <input
        type="text"
        className={styles.filterInput}
        value={value}
        onChange={onChangeFilter}
        placeholder=" enter contact"
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
