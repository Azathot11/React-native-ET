import React, {useState, useContext, useEffect} from 'react';
import { View, StyleSheet } from "react-native";

import {ExpenseContext} from "../../context/expense-context";
import Input from "./Input";
import Button from "../ui/Button";
import ErrorOverLay from "./ErrorOverLay";

const ExpenseForm = ({ isEditing ,navigation,expenseId}) => {
    const {addExpense,updateExpense,expenses,httpState} = useContext(ExpenseContext);
    const [formValues, setFormValues] = useState({
        amount: "",
        date: "",
        description: ""
    });


    useEffect(() => {
        if (isEditing) {
            const expense = expenses.find(expense => expense.id === expenseId);

            if(expense){
                setFormValues({
                    amount: expense.amount.toString(),
                    date: expense.date.toISOString().split('T')[0],
                    description: expense.description
                });
            }
        }
    }, [isEditing]);

    const inputChangeHandler = (inputIdentifier, enteredValue) => {
        setFormValues((currentInputValues) => ({
            ...currentInputValues,
            [inputIdentifier]: enteredValue,
        }));
    };

    const cancelHandler = () => {
        navigation.goBack()
    }

    const confirmHandler = () => {
        if (isEditing) {
            updateExpense(expenseId,
                {
                    ...formValues,
                    date: new Date(formValues.date),
                    amount: parseFloat(formValues.amount),
                }
            );
        } else {
            addExpense({
                ...formValues,
                amount: parseFloat(formValues.amount),
                date: new Date(formValues.date)
            });
        }
        navigation.goBack()
    }


    return (
        <>
            {/*{httpState.error &&<ErrorOverLay errorMessage={httpState.error}/>}*/}
        <View>
            <Input
                label="Amount"
                textInputConfig={{
                    placeholder: "Enter amount",
                    keyboardType: "decimal-pad",
                    value: formValues.amount,
                    onChangeText: inputChangeHandler.bind(this, 'amount') // Fixed this line
                }}
            />
            <Input
                label="Date"
                textInputConfig={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10,
                    value: formValues.date,
                    onChangeText: inputChangeHandler.bind(this, 'date') // Consistent with other inputs
                }}
            />
            <Input
                label="Description"
                textInputConfig={{
                    multiline: true,
                    autoCorrect: true,
                    value: formValues.description,
                    onChangeText: inputChangeHandler.bind(this, 'description') // Consistent with other inputs
                }}
            />

            <View style={styles.buttonContainer}>
                <Button  mode={'flat'} onPress={cancelHandler} style={styles.button}>Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ?"Update":"Add"}</Button>
            </View>
        </View>
        </>
    );
};

export default ExpenseForm;

const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        minWidth: 120,
        marginHorizontal: 8
    }
});
