import React, {useContext, useState} from "react";
import {View, Text, StyleSheet} from 'react-native';

const DiceBoxes = ({number}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.number}>{number}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#21726A",
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    number:{
        color: "#edc9af",
        fontSize: 30,

    }
});

export default DiceBoxes;