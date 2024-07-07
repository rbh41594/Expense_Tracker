import React from "react";
import styles from "./Hero.module.css";
import Card from "../Card/Card";

const Hero = () => {
  const handleAddExpense = () => {
    console.log("Add Expense button clicked");
  };

  const handleAddIncome = () => {
    console.log("Add Income button clicked");
  };

  return (
    <div className={styles.heroSection}>
      <Card
        title="Wallet Balance"
        amount="5000"
        buttonLabel="+Add Income"
        onButtonClick={handleAddIncome}
      />
      <Card
        title="Expenses"
        amount="500"
        buttonLabel="+Add Expense"
        onButtonClick={handleAddExpense}
      />
    </div>
  );
};

export default Hero;
