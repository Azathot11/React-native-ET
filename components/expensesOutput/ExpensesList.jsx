import React from 'react';
import {FlatList, Text, View, StyleSheet, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {GlobalStyles} from "../../constants/styles";


const RenderItem = ({item,onPressHandler}) => {
    return (
        <Pressable onPress={()=>{onPressHandler(item.id)}} style={styles.listItemContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{item.description}</Text>
                <Text style={styles.dateStyle}>{item.date.toLocaleDateString()}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.priceStyle}>{item.amount} XAF</Text>
            </View>
        </Pressable>
    );
}

const ExpensesList = ({expenses}) => {
    const navigation = useNavigation();
 const    onPressHandler = (id) => {
        navigation.navigate('ManageExpenses', {expenseId: id});
 }
    return (
        <FlatList
            data={expenses}
            keyExtractor={(item) => item.id}
            renderItem={
                ({item}) => {
                    return <RenderItem item={item} onPressHandler={onPressHandler}/>
                }
            }
            style={styles.listStyle}
        />
    );
};

export default ExpensesList;

const styles = StyleSheet.create({
    listStyle: {
        marginVertical: 10
    },
    listItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: GlobalStyles.colors.primary500,
        marginVertical: 10,
        borderRadius: 10,
    },
    textContainer: {
        flexDirection: 'column',
        gap: 10,
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: GlobalStyles.colors.primary50
    },
    dateStyle: {
        color: GlobalStyles.colors.primary100,
        fontSize: 15,
    },
    priceContainer: {
        borderRadius:10,
        padding: 15,
        backgroundColor: GlobalStyles.colors.primary50,
        width: 110,
    },
    priceStyle: {
        color: GlobalStyles.colors.primary400,
        fontSize: 15,
        textAlign: 'center',
    }

})
