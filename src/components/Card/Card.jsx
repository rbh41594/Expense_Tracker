import React from 'react';
import styles from './Card.module.css'; 
import Button from '../Button/Button';

const Card = ({ title, amount, buttonLabel, onButtonClick }) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}: {amount}</p>
      <Button label={buttonLabel} onClick={onButtonClick} className={styles.button} />
    </div>
  );
};

export default Card;
