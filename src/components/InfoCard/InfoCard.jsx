import ActionButton from '../Button/ActionButton';
import styles from './InfoCard.module.css';

export default function InfoCard({ heading, amount, buttonLabel, buttonVariant, onClick, isSuccess = true }) { 
    return (
        <div className={styles.card}>
            <h3 className={styles.cardHeading}>
                {`${heading}: `}
                <span className={isSuccess ? styles.success : styles.error}> 
                    {`₹${amount}`} 
                </span>
            </h3>
            <ActionButton 
                onClick={onClick} 
                variant={buttonVariant} 
            >
                {buttonLabel} 
            </ActionButton>
        </div>
    );
}
