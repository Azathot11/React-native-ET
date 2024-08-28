import {createContext, useState} from "react";
import {expenses as initialExpense} from "../data";

export const ExpenseContext = createContext({
    expenses:[],
    addExpense:(expense)=>{},
    deleteExpense:(expenseId)=>{},
    updateExpense:(expenseId, newExpense)=>{}
})


const ExpenseContextProvider = ({children}) => {
    const [expenses,setExpenses] = useState(initialExpense)

    const addExpense = (expense)=>{
        setExpenses((prevExpenses)=>[expense,...prevExpenses])
    }

    const deleteExpense = (expenseId)=>{
        const newExpenses = expenses.filter(expense => expense.id !== expenseId);
        setExpenses(newExpenses)
    }

    const updateExpense = (expenseId, newExpense) => {
        const updatedExpenses = expenses.map(expense => {
            if (expense.id === expenseId) {
                return { ...expense, ...newExpense };
            }
            return expense;
        });

        setExpenses(updatedExpenses); // Update state with the new array
    };

    return (
        <ExpenseContext.Provider value={{
            expenses,
            addExpense,
            deleteExpense,
            updateExpense
        }}>
            {children}
        </ExpenseContext.Provider>
    )
}



export default ExpenseContextProvider;
