import styles from './PageControls.module.css'; // Renamed file
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function PageControls({ onPageChange, activePage, totalPageCount }) {

    const goToPrevPage = () => {
        if (activePage > 1) {
            onPageChange(prev => prev - 1);
        }
    };

    const goToNextPage = () => {
        if (activePage < totalPageCount) {
            onPageChange(prev => prev + 1);
        }
    };

    return (
        <div className={styles['controls-wrapper']}>
            <button 
                onClick={goToPrevPage} 
                disabled={activePage === 1}
            >
                <IoIosArrowRoundBack />
            </button>

            <p>{activePage}</p>

            <button 
                onClick={goToNextPage} 
                disabled={activePage === totalPageCount}
            >
                <IoIosArrowRoundForward />
            </button>
        </div>
    );
}
