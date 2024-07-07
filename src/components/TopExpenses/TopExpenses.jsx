import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import styles from './TopExpenses.module.css';

const TopExpenses = ({ expenses }) => {
  return (
    <div className={styles.topExpenses}>
      <h2>Top Expenses</h2>
      <div className={styles.expenseList}>
        {expenses.map(expense => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </div>
    </div>
  );
};

export default TopExpenses;