import React from 'react';
import {View, StyleSheet, FlatList, Text} from "react-native";
import ExpensesList from "./ExpensesList";
import ExpenseSummary from "./ExpenseSummary";

const ExpensesOutput = ({expenses}) => {
    return (
        <View>
          <ExpenseSummary expenses={expenses} period={'Last 7 days '}/>
            <ExpensesList expenses={expenses}/>
        </View>
    );
};

export default ExpensesOutput;


const styles = StyleSheet.create({
    container:{
    }
})
