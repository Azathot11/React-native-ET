import React from 'react';
import {View, StyleSheet, Text, TextInput} from "react-native";
import {GlobalStyles} from "../../constants/styles";

const Input = ({label,textInputConfig}) => {

    let inputStyle = [styles.input];

    if (textInputConfig && textInputConfig.multiline){
        inputStyle.push(styles.inputMultiline);
    }
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput {...textInputConfig} style={inputStyle}/>
        </View>
    );
};

export default Input;

const styles=StyleSheet.create({
    inputContainer:{
        marginVertical:8,
        marginHorizontal:4
    },
    label:{
        fontSize:12,
        color:GlobalStyles.colors.primary100,
        marginBottom:4,
    },
    input:{
        backgroundColor:GlobalStyles.colors.primary100,
        color:GlobalStyles.colors.primary700,
        padding:6,
        borderRadius:6,
        fontSize:18
    },
    inputMultiline:{
        minHeight:100,
        textAlignVertical:'top'
    }
})
