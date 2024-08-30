import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Button from "../ui/Button";


const ErrorOverLay = ({errorMessage,onConfirm}) => {
    return (
        <View style={styles.errorContainer}>
            <Text style={[styles.text,styles.title]}>An error occurred</Text>
            <Text style={styles.text}>{errorMessage}</Text>
            <Button onPress={onConfirm}>Okay</Button>
        </View>
    );
};

export default ErrorOverLay;


const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(48, 63, 159, 0.75)',  // Adjusted to use rgba for opacity
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1000,
    },
    text:{
        color:"white",
        marginBottom:8,
        textAlign:"center",
    },
    title:{
        fontSize:24,
        fontWeight: 'bold',
    },
});

