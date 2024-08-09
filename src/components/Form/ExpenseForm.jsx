import styles from './BalanceForm.module.css' 
import ActionButton from '../Button/ActionButton' 
import { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack';

export default function SpendingForm({ toggleModal, expenseData, updateExpenseData, editItemId, updateBalance, currentBalance }) { 

    const [formInput, setFormInput] = useState({
        title: '',
        category: '',
        cost: '',
        date: '',
    })

    const { enqueueSnackbar } = useSnackbar();

    const handleInputChange = (e) => { 
        const { name, value } = e.target;
        setFormInput(prev => ({ ...prev, [name]: value })) 
    }

    const submitExpense = (e) => { 
        e.preventDefault()

        if (currentBalance < Number(formInput.cost)) { 

            enqueueSnackbar("Cost should be less than the available balance", { variant: "warning" }) 
            toggleModal(false)
            return
        }

        updateBalance(prev => prev - Number(formInput.cost)) 

        const lastId = expenseData.length > 0 ? expenseData[0].id : 0 
        updateExpenseData(prev => [{ ...formInput, id: lastId + 1 }, ...prev]) 

        resetForm() 
        toggleModal(false)
    }

    const submitEdit = (e) => { 
        e.preventDefault()

        const updatedExpenses = expenseData.map(item => { 
            if (item.id == editItemId) { 

                const priceDifference = item.cost - Number(formInput.cost) 

                if (priceDifference < 0 && Math.abs(priceDifference) > currentBalance) { 
                    enqueueSnackbar("Cost should not exceed the available balance", { variant: "warning" }) 
                    toggleModal(false)
                    return { ...item }
                }

                updateBalance(prev => prev + priceDifference) 
                return { ...formInput, id: editItemId } 
            }
            else {
                return item
            }
        })

        updateExpenseData(updatedExpenses) 

        toggleModal(false)
    }

    const resetForm = () => {
        setFormInput({
            title: '',
            category: '',
            cost: '',
            date: '',
        })
    }

    useEffect(() => {
        if (editItemId) { 
            const expense = expenseData.find(item => item.id == editItemId) 

            setFormInput({
                title: expense.title,
                category: expense.category,
                cost: expense.cost, 
                date: expense.date
            })
        }
    }, [editItemId]) 

    return (
        <div className={styles.formWrapper}>
            <h3>{editItemId ? 'Edit Expense' : 'Add Expense'}</h3> 
            <form onSubmit={editItemId ? submitEdit : submitExpense}> 
                <input type="text" name="title" placeholder='Title'
                    value={formInput.title} 
                    onChange={handleInputChange}
                    required
                />

                <input type="number" name="cost" placeholder='Cost' 
                    value={formInput.cost} 
                    onChange={handleInputChange} 
                    required
                />

                <select name="category"
                    value={formInput.category} 
                    onChange={handleInputChange} 
                    required
                >
                    <option value='' disabled>Select category</option>
                    <option value='food'>Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="travel">Travel</option>
                </select>

                <input name="date" type="date"
                    value={formInput.date} 
                    onChange={handleInputChange}
                    required
                />

                <ActionButton type="submit" variant="default" hasShadow>{editItemId ? 'Edit Expense' : 'Add Expense'}</ActionButton> 

                <ActionButton variant='secondary' hasShadow
                    onClick={() => toggleModal(false)} 
                >
                    Cancel
                </ActionButton>
            </form>
        </div>
    )
}
