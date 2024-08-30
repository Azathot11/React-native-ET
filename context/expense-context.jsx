import {createContext, useEffect, useState} from "react";
 import {expenses as initialExpense} from "../util/data";
import {storeExpenses,fetchExpenses,updateExpenses,deleteExpenses} from "../util/http";

export const ExpenseContext = createContext({
    expenses:[],
    httpState: {loading:false, error:null},
    addExpense:(expense)=>{},
    deleteExpense:(expenseId)=>{},
    updateExpense:(expenseId, newExpense)=>{}
})


const ExpenseContextProvider = ({children}) => {
    const [expenses,setExpenses] = useState([])
    const [httpState, setHttpState] = useState({loading:false, error:null});
    const changeHttpState = (loading, error) => {
        setHttpState(prevState => ({
            ...prevState,
            loading,
            error,
        }));
    };
    useEffect(() => {
        const fetch = async () => {
            changeHttpState(true, null);
            try {
                const response = await fetchExpenses();
                if (!response) {
                    throw new Error('Something went wrong!');
                }
                const data = response.data;
                const loadedExpenses = [];

                for (const key in data) {
                    if (data[key]) {  // Check if data[key] is not null
                        loadedExpenses.push({
                            id: key,
                            amount: data[key].amount,
                            date: new Date(data[key].date),
                            description: data[key].description,
                        });
                    }
                }

                setExpenses(loadedExpenses);
                changeHttpState(false);
            } catch (error) {
                console.log(error);
                changeHttpState(false, error);
            }
        };
        fetch();
    }, []);


    const addExpense = async  (expense)=>{
        changeHttpState(true, null);
        try{
            const response = await storeExpenses(expense)
            const newExpense = {
                id: response.data.name,
                ...expense
            }
                setExpenses((prevExpenses)=>[newExpense,
                    ...prevExpenses])
            changeHttpState(false);
        }catch (error){
            console.log(error)
            changeHttpState(false, error);
        }
    }

    const updateExpense = async(expenseId, newExpense) => {
        changeHttpState(true, null);
        try {
            const response = await updateExpenses(expenseId, newExpense)
            if(response){
                const updatedExpenses = expenses.map(expense => {
                    if (expense.id === expenseId) {
                        return { ...expense, ...newExpense };
                    }
                    return expense;
                });
                setExpenses(updatedExpenses); // Update state with the new array
                changeHttpState(false);
            }
        }catch (err){
            changeHttpState(false, err);
        }

    };


    const deleteExpense = async(expenseId)=>{
        changeHttpState(true, null);
        try{
            const response = await deleteExpenses(expenseId)
            if(!response){
                throw new Error('Something went wrong!')
            }
            const newExpenses = expenses.filter(expense => expense.id !== expenseId);
            setExpenses(newExpenses)
            changeHttpState(false);
        }catch (error){
            changeHttpState(false, error);
        }
    }



    return (
        <ExpenseContext.Provider value={{
            expenses,
            httpState,
            addExpense,
            deleteExpense,
            updateExpense
        }}>
            {children}
        </ExpenseContext.Provider>
    )
}



export default ExpenseContextProvider;
