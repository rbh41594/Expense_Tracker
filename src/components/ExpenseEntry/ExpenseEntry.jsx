import styles from './ExpenseEntry.module.css'; // Renamed file
import { IoMdCloseCircleOutline } from "react-icons/io";
import { PiPizza, PiGift } from "react-icons/pi";
import { MdOutlineModeEdit } from "react-icons/md";
import { BsSuitcase2 } from "react-icons/bs";

function ExpenseEntry({ entry, onDelete, onEdit }) {

    return (
        <div className={styles.entryCard}>
            <div className={styles.entryDetails}>
                <div className={styles.iconWrapper}>
                    {entry.category === 'food' && <PiPizza />}
                    {entry.category === 'entertainment' && <PiGift />}
                    {entry.category === 'travel' && <BsSuitcase2 />}
                </div>
                <div className={styles.infoSection}>
                    <h5>{entry.title}</h5>
                    <p>{entry.date}</p>
                </div>
            </div>

            <div className={styles.entryActions}>
                <p className={styles.amount}>{`₹${entry.price}`}</p>
                <div className={styles.buttonGroup}>
                    <button className={styles.deleteBtn} onClick={onDelete}>
                        <IoMdCloseCircleOutline />
                    </button>
                    <button className={styles.editBtn} onClick={onEdit}>
                        <MdOutlineModeEdit />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ExpenseEntry;