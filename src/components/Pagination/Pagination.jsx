import React from 'react';
import styles from './Pagination.modules.css';

const Pagination = () => {
  return (
    <div className={styles.paginationControls}>
      <button className={styles.button}>←</button>
      <div className={styles.pageNumber}>1</div>
      <button className={styles.button}>→</button>
    </div>
  );
};

export default Pagination;
