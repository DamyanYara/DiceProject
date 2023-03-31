import React, { useState } from "react";
import {View, StyleSheet, Button, Text} from 'react-native';
import DiceBoxes from "../components/DiceComponent";

const HomeScreen = () => {
    const [result, setResult] = useState({one:1, two:2, thre:3, four:4});
    const [counter, setCounter] = useState(0);
 

    const getRandomNumebr= () => {
        return Math.floor(Math.random()*6+1)
    }

    const handleClick = () => {
        setResult({one:getRandomNumebr(), two:getRandomNumebr(), thre:getRandomNumebr(), four:getRandomNumebr()});
        

    }

    return(
        <View style={styles.container}>
        
            <View style={styles.counter}>
                <Text>Total Value: {result.one+result.two+result.thre+result.four}</Text>
            </View >
        <View style={styles.diceContainer}> 
            <DiceBoxes number={result.one}/>
            <DiceBoxes number={result.two}/>
            <DiceBoxes number={result.thre}/>
            <DiceBoxes number={result.four}/>
        </View>

        <Button title="Roll Dice" onPress={handleClick}/>
        
        </View>
    );
};

const styles = StyleSheet.create({
    diceContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
       
        
    },
    counter:{
        justifyContent: "center",
        alignItems: "center"
    },
    container:{
        height:800,
        marginTop:100,
        justifyContent:"space-between",
        paddingVertical: 50,
    }
});

export default HomeScreen;
