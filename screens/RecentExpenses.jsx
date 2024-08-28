import  {useContext} from 'react';
import { View,StyleSheet} from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import {GlobalStyles} from "../constants/styles";
import {ExpenseContext} from "../context/expense-context";

const RecentExpenses = () => {
    const {expenses} = useContext(ExpenseContext);
    return (
        <View style={styles.screen}>
            <ExpensesOutput expenses={expenses}/>
        </View>
    );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  screen: {
      flex: 1,
      backgroundColor: GlobalStyles.colors.primary800,
      padding:10
  }
})
