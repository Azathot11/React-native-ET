import  {useContext} from 'react';
import {View,StyleSheet} from "react-native";
import ExpensesList from "../components/expensesOutput/ExpensesList";
import {GlobalStyles} from "../constants/styles";
import {ExpenseContext} from "../context/expense-context";
import ExpenseSummary from "../components/expensesOutput/ExpenseSummary";
import LoadingOverlay from "../components/manageExpense/LoadingOverlay";

const AllExpenses = () => {
    const {expenses,httpState} = useContext(ExpenseContext);
    return (
        <>
            {httpState.loading && <LoadingOverlay/>}
        <View style={styles.screen}>
            <ExpenseSummary expenses={expenses} period={'Total'}/>
            <ExpensesList expenses={expenses}/>
        </View>
        </>
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
