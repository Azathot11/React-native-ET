import React, {useEffect, useLayoutEffect, useState,useContext} from 'react';
import {Text, View, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

import IconButton from "../components/ui/IconButton";
import {GlobalStyles} from "../constants/styles";
import Button from "../components/ui/Button";
import {ExpenseContext} from "../context/expense-context";
import ExpenseForm from "../components/manageExpense/ExpenseForm";

const ManageExpenses = ({route}) => {
    const {deleteExpense,} = useContext(ExpenseContext);
    const { expenseId = null } = route.params ?? {};
    const isEditing = !!expenseId;
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation,isEditing]);


    const deleteExpenseHandler = () => {
        deleteExpense(expenseId);
        navigation.goBack();
    }


    return (
        <View style={styles.container}>
            <ExpenseForm  isEditing={isEditing} navigation={navigation} expenseId={expenseId} />
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

})
