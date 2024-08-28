import React, {useEffect, useLayoutEffect, useState,useContext} from 'react';
import {Text, View, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

import IconButton from "../components/ui/IconButton";
import {GlobalStyles} from "../constants/styles";
import Button from "../components/ui/Button";
import {ExpenseContext} from "../context/expense-context";

const ManageExpenses = ({route}) => {
    const {expenses,addExpense,deleteExpense,updateExpense} = useContext(ExpenseContext);
    const [selectedExpense, setSelectedExpense] = useState({});
    const { expenseId = null } = route.params ?? {};
    const isEditing = !!expenseId;
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation,isEditing]);


    useEffect(() => {
        if (isEditing) {
            const expense = expenses.find(expense => expense.id === expenseId);
            setSelectedExpense(expense);
        }
    }, [isEditing]);

    const cancelHandler = () => {
        navigation.goBack()
    }

    const confirmHandler = (formData) => {
        if (isEditing) {
            updateExpense(selectedExpense);
        } else {
            addExpense(
                {
                    id: 2,
                    date: new Date('2024-08-03'),
                    amount: 25.00,
                    description: 'Coffee with friends',
                },
            );
        }
        navigation.goBack()
    }

    const deleteExpenseHandler = () => {
        deleteExpense(expenseId);
        navigation.goBack();
    }



    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button  mode={'flat'} onPress={cancelHandler} style={styles.button}>Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ?"Update":"Add"}</Button>
            </View>
            {isEditing
                &&
                <View style={styles.deleteContainer}>
                    <IconButton
                        name={'trash'}
                        color={GlobalStyles.colors.error500} size={35}
                        onPressHandler={deleteExpenseHandler}/>
                </View>
            }
        </View>
    );
};

export default ManageExpenses;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
   deleteContainer:{
       marginTop: 16,
       paddingTop: 8,
       borderTopWidth:2,
       borderTopColor: GlobalStyles.colors.primary200,
       alignItems: 'center',
    },
    buttonContainer:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
      minWidth: 120,
        marginHorizontal: 8
    }
})
