import './App.css';
import React from 'react';
import Hero from './components/Hero/Hero';
import RecentTransactions from './components/RecentTransactions/RecentTransactions';
import TopExpenses from './components/TopExpenses/TopExpenses';

const transactions = [
  { id: 1, name: 'Samosa', date: 'March 20, 2024', amount: '₹150' },
  { id: 2, name: 'Movie', date: 'March 21, 2024', amount: '₹300' },
  { id: 3, name: 'Auto', date: 'March 22, 2024', amount: '₹50' },
];

const expenses = [
  { id: 1, category: 'Entertainment', amount: 80 },
  { id: 2, category: 'Food', amount: 50 },
  { id: 3, category: 'Travel', amount: 30 },
];

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Hero />
      <div className="mainContent">
        <RecentTransactions transactions={transactions} />
        <TopExpenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
