import React from 'react';
import styles from './ExpenseItem.module.css';

const ExpenseItem = ({ category, amount }) => {
  return (
    <div className={styles.expenseItem}>
      <div className={styles.category}>{category}</div>
      <div className={styles.amount}>
        <div className={styles.amountBar} style={{ width: `${amount}%` }}></div>
      </div>
    </div>
  );
};

export default ExpenseItem;
