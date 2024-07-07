import React from 'react';
import styles from './Transactions.module.css';

const TransactionItem = ({ name, date, amount }) => {
  return (
    <div className={styles.transactionItem}>
      <div className={styles.details}>
        <p>{name}</p>
        <p>{date}</p>
      </div>
      <div className={styles.amount}>{amount}</div>
      <div className={styles.actions}>
        <button className={styles.edit}>✏️</button>
        <button className={styles.delete}>❌</button>
      </div>
    </div>
  );
};

export default TransactionItem;
