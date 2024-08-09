import styles from './ActionButton.module.css';

export default function ActionButton({ label, onClick, variant = 'default', hasShadow = false, type = 'button' }) { 
    return (
        <button
            type={type} 
            onClick={onClick} 
            className={`${styles.button} ${styles[variant]} ${hasShadow ? styles.shadow : ''}`} 
        >
            {label} 
        </button>
    );
}
