import React from 'react';
import TransactionItem from '../Transactions/Transactions';
import PaginationControls from '../Pagination/Pagination';
import styles from './RecentTransactions.module.css';

const RecentTransactions = ({ transactions }) => {
  return (
    <div className={styles.recentTransactions}>
      <h2>Recent Transactions</h2>
      <div className={styles.transactionList}>
        {transactions.map(transaction => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </div>
      <PaginationControls />
    </div>
  );
};

export default RecentTransactions;