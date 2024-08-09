import { useEffect, useState } from "react";
import InfoCard from "../components/InfoCard/InfoCard";
import styles from "./Landing.module.css";
import PieChart from "../components/Chart/PieChart/PieChart";
import BarChart from "../components/Chart/BarChart/BarChartTrnxs";
import TransactionList from "../components/TransactionList/TransactionList";
import BalanceForm from "../components/Form/BalanceForm";
import Modal from "../components/Modal/Modal";
import ExpenseForm from "../components/Form/ExpenseForm";

export default function Landing() {
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0);
  const [expenseList, setExpenseList] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isBalanceModalOpen, setIsBalanceModalOpen] = useState(false);

  const [categorySpends, setCategorySpends] = useState({
    food: 0,
    entertainment: 0,
    travel: 0,
  });
  const [categoryCount, setCategoryCount] = useState({
    food: 0,
    entertainment: 0,
    travel: 0,
  });

  useEffect(() => {
    const localBalance = localStorage.getItem("balance");

    if (localBalance) {
      setBalance(Number(localBalance));
    } else {
      setBalance(5000);
      localStorage.setItem("balance", 5000);
    }

    const items = JSON.parse(localStorage.getItem("expenses"));

    setExpenseList(items || []);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (expenseList.length > 0 || isMounted) {
      localStorage.setItem("expenses", JSON.stringify(expenseList));
    }

    if (expenseList.length > 0) {
      setExpense(
        expenseList.reduce(
          (accumulator, currentValue) =>
            accumulator + Number(currentValue.price),
          0
        )
      );
    } else {
      setExpense(0);
    }

    let foodSpends = 0,
      entertainmentSpends = 0,
      travelSpends = 0;
    let foodCount = 0,
      entertainmentCount = 0,
      travelCount = 0;

    expenseList.forEach((item) => {
      if (item.category === "food") {
        foodSpends += Number(item.price);
        foodCount++;
      } else if (item.category === "entertainment") {
        entertainmentSpends += Number(item.price);
        entertainmentCount++;
      } else if (item.category === "travel") {
        travelSpends += Number(item.price);
        travelCount++;
      }
    });

    setCategorySpends({
      food: foodSpends,
      travel: travelSpends,
      entertainment: entertainmentSpends,
    });

    setCategoryCount({
      food: foodCount,
      travel: travelCount,
      entertainment: entertainmentCount,
    });
  }, [expenseList]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("balance", balance);
    }
  }, [balance]);

  return (
    <div className={styles.container}>
      <h1>Expense Tracker</h1>

      <div className={styles.cardsWrapper}>
        <InfoCard
          heading="Wallet Balance"
          amount={balance}
          buttonLabel="+ Add Income"
          buttonVariant="success"
          onClick={() => {
            console.log('Opening balance modal');
            setIsBalanceModalOpen(true);
          }}
        />

        <InfoCard
          heading="Expenses"
          amount={expense}
          buttonLabel="+ Add Expense"
          buttonVariant="failure"
          isSuccess={false}
          onClick={() => {
            setIsExpenseModalOpen(true);
          }}
        />

        <PieChart
          data={[
            { name: "Food", value: categorySpends.food },
            { name: "Entertainment", value: categorySpends.entertainment },
            { name: "Travel", value: categorySpends.travel },
          ]}
        />
      </div>

      <div className={styles.transactionsWrapper}>
        <TransactionList
          transactions={expenseList}
          editTransactions={setExpenseList}
          title="Recent Transactions"
          balance={balance}
          setBalance={setBalance}
        />

        <BarChart
          data={[
            { name: "Food", value: categorySpends.food },
            { name: "Entertainment", value: categorySpends.entertainment },
            { name: "Travel", value: categorySpends.travel },
          ]}
        />
      </div>

      <Modal isModalOpen={isExpenseModalOpen} closeModal={setIsExpenseModalOpen}>
        <ExpenseForm
          setIsOpen={setIsExpenseModalOpen}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
          setBalance={setBalance}
          balance={balance}
        />
      </Modal>

      <Modal isModalOpen={isBalanceModalOpen} closeModal={setIsBalanceModalOpen}>
        <BalanceForm setIsOpen={setIsBalanceModalOpen} setBalance={setBalance} />
      </Modal>
    </div>
  );
}
