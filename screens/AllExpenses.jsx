import  {useContext} from 'react';
import {View,StyleSheet} from "react-native";
import ExpensesList from "../components/expensesOutput/ExpensesList";
import {GlobalStyles} from "../constants/styles";
import {ExpenseContext} from "../context/expense-context";

const AllExpenses = () => {
    const {expenses} = useContext(ExpenseContext);
    return (
        <View style={styles.screen}>
            <ExpensesList expenses={expenses}/>
        </View>
    );
};

export default AllExpenses;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary800,
        padding:10
    }
})
