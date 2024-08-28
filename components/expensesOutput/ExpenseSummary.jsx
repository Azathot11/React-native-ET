import React from 'react';
import {Text, View,StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants/styles";

const ExpenseSummary = ({period, expenses}) => {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{period}</Text>
            <Text style={styles.textStyle}>{total.toFixed(2)} XAF</Text>
        </View>
    );
};

export default ExpenseSummary;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingVertical:15,
        backgroundColor: GlobalStyles.colors.primary50,
        marginVertical: 10,
        borderRadius: 10,
    },
    textStyle:{
        fontWeight: 'bold',
        fontSize: 15,
        color: GlobalStyles.colors.primary400
    }
})
