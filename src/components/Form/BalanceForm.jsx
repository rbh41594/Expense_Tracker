import styles from './BalanceForm.module.css'
import ActionButton from '../Button/ActionButton' 
import { useState } from 'react'
import { useSnackbar } from 'notistack';

export default function BalanceForm({ toggleModal, updateBalance }) { 

    const [amount, setAmount] = useState('') 
    const { enqueueSnackbar } = useSnackbar();

    const handleBalanceSubmission = (e) => { 
        e.preventDefault()

        if (Number(amount) < 0) { 
            enqueueSnackbar("Amount should be greater than 0", { variant: "warning" }) 
            toggleModal(false) 
            return
        }

        updateBalance(prev => prev + Number(amount))
        toggleModal(false) 
    }

    return (
        <div className={styles.formWrapper}>
            <h3>Add Balance</h3>
            <form onSubmit={handleBalanceSubmission}> 
                <input
                    type="number"
                    placeholder='Enter Amount' 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    required
                />
                <ActionButton type="submit" variant="default" hasShadow>Add Balance</ActionButton>
                <ActionButton
                    variant='secondary'
                    hasShadow
                    onClick={() => toggleModal(false)} 
                >
                    Cancel
                </ActionButton>
            </form>
        </div>
    )
}
