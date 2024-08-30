import axios from 'axios'

export const storeExpenses = async (expense) => {
    try {
        return await axios.post('https://moble-166e1-default-rtdb.firebaseio.com/expenses.json', expense)
    } catch (error) {
        throw error
    }
}

export const fetchExpenses = async () => {
    try {
        return await axios.get('https://mobile-166e1-default-rtdb.firebaseio.com/expenses.json')
    } catch (error) {
        throw error
    }
}


export const updateExpenses = async (expenseId, newExpense) => {
    try {
        return await axios.put(`https://mobile-166e1-default-rtdb.firebaseio.com/expenses/${expenseId}.json`, newExpense)
    } catch (error) {
        throw error
    }
}

export  const deleteExpenses = async (expenseId) => {
    try {
        return await axios.delete(`https://mobile-166e1-default-rtdb.firebaseio.com/expenses/${expenseId}.json`)
    } catch (error) {
        throw error
    }
}
