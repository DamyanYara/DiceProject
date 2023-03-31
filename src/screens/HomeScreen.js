import React, { useState } from "react";
import {View, StyleSheet, Button} from 'react-native';
import DiceBoxes from "../components/DiceComponent";

const HomeScreen = () => {
    const [result, setResult] = useState({one:1, two:2, thre:3, four:4});
 

    const getRandomNumebr= () => {
        return Math.floor(Math.random()*6+1)
    }

    const handleClick = () => {
        setResult({one:getRandomNumebr(), two:getRandomNumebr(), thre:getRandomNumebr(), four:getRandomNumebr()});
    

    }

    return(
        <>
        <View style={styles.container}>
            <DiceBoxes number={result.one}/>
            <DiceBoxes number={result.two}/>
            <DiceBoxes number={result.thre}/>
            <DiceBoxes number={result.four}/>
        </View>

        <Button title="Roll Dice" onPress={handleClick}/>
        </>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-around",
        height: 800,
        alignItems: "center"
        
    }
});

export default HomeScreen;
