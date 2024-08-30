import React from 'react';
import {View,ActivityIndicator,StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants/styles";

const LoadingOverlay = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(48, 63, 159, 0.75)',
        backgroundOpacity: 0.75,
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1000,
    },

})
