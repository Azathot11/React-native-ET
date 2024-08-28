import React from 'react';
import {Pressable, StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";

const IconButton = ({name,size,color,onPressHandler}) => {
    return (
        <Pressable onPress={onPressHandler} style={({pressed})=> pressed && styles.pressed}>
          <View style={styles.buttonContainer}>
              <Ionicons name={name} size={size} color={color}/>
          </View>
        </Pressable>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 6,
        borderRadius: 24,
        margin:4 ,
    },
    pressed:{
        opacity: 0.75
    }
});
