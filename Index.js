import React, { useState } from 'react';
import { TouchableOpacity as TO, Dimensions, StyleSheet, Text, View, } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 


const vw = Dimensions.get("screen").width;

export function Calculadora() {

    const[resultText,setResultText] = useState("");
    const[calcText,setCalcText] = useState("");


    const onButtonClick = (text) => {
        
        console.log(text);
        if (text == "=") {
            return calculateResult();
          }
        setResultText(resultText + text);
    };

    const calculateResult = () => {
        setCalcText(eval(resultText))
    };



    const onOperationClick = (operation) => {
        let operations = ["DEL", "+", "-", "*", "/", "+/-","%"];

        if (operation == "AC") {
            setResultText("");
            setCalcText("0");
            return;
        }

        if (operation == "DEL") {
        return setResultText(resultText.toString().substring(0,resultText.length-1));
        }

        if (operation == "+/-") {
            setResultText(-1*resultText);
            return;
            }
        
        if (operations.includes(resultText.toString().split("").pop())) return;
        setResultText(resultText + operation);

       
    }

    return (
        <View style={styles.main}>
            <View>
                <Text style={styles.name}>Calculadora </Text> 
            </View>
            <View style={styles.container} >
                <Text style={styles.visor}> {calcText}</Text>
            </View>
            <View style={styles.container2} >
                <Text style={styles.visor2}> {resultText} </Text>
            </View>
            <View >
                <View style={styles.buttons}>
                <TO onPress={() => onOperationClick("AC")}>
                    <View style={styles.functions1}>
                        <Text style={styles.letters}>AC</Text>
                    </View>
                </TO>
                <TO onPress={() => onOperationClick("+/-")}>
                    <View style={styles.functions1}>
                        <Text style={styles.letters}>+/-</Text>
                    </View>
                </TO>
                <TO onPress={() => onOperationClick("%")}>
                    <View style={styles.functions1}>
                        <Text style={styles.letters}>%</Text>
                    </View>
                </TO>
                <TO onPress={() => onOperationClick("DEL")}>
                    <View style={styles.functions1}>
                        <Text style={styles.letters}>DEL</Text>
                    </View>
                </TO>
                    
                </View>
                
                <View style={styles.buttons}>
                <TO onPress={() => onButtonClick(7)}>
                    <View style={styles.numbers}>
                        <Text style={styles.letters2}>7</Text>
                    </View>
                </TO>
                <TO onPress={() => onButtonClick(8)}>
                    <View style={styles.numbers}>
                        <Text style={styles.letters2}>8</Text>
                    </View>
                </TO>
                <TO onPress={() => onButtonClick(9)}>
                    <View style={styles.numbers}>
                        <Text style={styles.letters2}>9</Text>
                    </View>
                </TO>
                <TO onPress={() => onOperationClick("/")}>
                    <View style={styles.functions2}>
                        <Text style={styles.letters}>
                        <FontAwesome5 name="divide" size={24} color="white" />
                        </Text>
                    </View>
                </TO>
                
                
                </View>
                <View style={styles.buttons}>
                <TO onPress={() => onButtonClick(4)}>
                    <View style={styles.numbers}>
                        <Text style={styles.letters2}>4</Text>
                    </View>
                </TO>
                <TO onPress={() => onButtonClick(5)}>
                    <View style={styles.numbers}>
                        <Text style={styles.letters2}>5</Text>
                    </View>
                </TO>
                <TO onPress={() => onButtonClick(6)}>
                    <View style={styles.numbers}>
                        <Text style={styles.letters2}>6</Text>
                    </View>
                </TO>
                <TO onPress={() => onOperationClick("*")}>
                    <View style={styles.functions2}>
                        <Text style={styles.letters}>x</Text>
                    </View>
                </TO>
                
                
                </View>

                <View style={styles.buttons}>
                <TO onPress={() => onButtonClick(1)}>
                    <View style={styles.numbers}>
                        <Text style={styles.letters2}>1</Text>
                    </View>
                </TO>
                <TO onPress={() => onButtonClick(2)}>
                    <View style={styles.numbers}>
                        <Text style={styles.letters2}>2</Text>
                    </View>
                </TO>
                <TO onPress={() => onButtonClick(3)}>
                    <View style={styles.numbers}>
                        <Text style={styles.letters2}>3</Text>
                    </View>
                </TO>
                <TO onPress={() => onOperationClick("-")}>
                    <View style={styles.functions2}>
                        <Text style={styles.letters}>-</Text>
                    </View>
                </TO>
                
                
                </View>
                <View style={styles.buttons}>
                <TO onPress={() => onButtonClick(0)}>
                    <View style={styles.numbers}>
                        <Text style={styles.letters2}>0</Text>
                    </View>
                </TO>
                <TO onPress={() => onButtonClick(".")}>
                    <View style={styles.numbers}>
                        <Text style={styles.letters2}>.</Text>
                    </View>
                </TO>
                <TO onPress={() => onButtonClick("=")}>
                    <View style={styles.functions2}>
                        <Text style={styles.letters}>=</Text>
                    </View>
                </TO>
                <TO onPress={() => onOperationClick("+")}>
                    <View style={styles.functions2}>
                        <Text style={styles.letters}>+</Text>
                    </View>
                </TO>
                
                </View>
            </View>
        </View>


    );
}


const styles=StyleSheet.create({
    main: {
        width: vw,
        paddingTop: 30,
        backgroundColor: "#000000",
    },

    name: {
        color: "#FA7F72",
        fontSize:25,
        textAlign: "center",
        fontWeight: "bold",

    },

    visor:{
        color: "#FFFFFF",
        fontSize:100,
        textAlign: "right",

    },

    visor2:{
        color: "#D3D3D3",
        fontSize:30,
        textAlign: "right",

    },

    container:{
        paddingTop:20,
        paddingRight:25,
        paddingBottom:5,
    },
    container2:{
        paddingTop:2,
        paddingRight:25,
        paddingBottom:11,
    },

    buttons:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        width: vw,
        paddingLeft:5,
    },

    functions1:{
        backgroundColor: '#6BE8A7',
        borderRadius: 100,
        overflow: 'hidden',
        width: 78,
        height:78,
        margin:8,
        justifyContent:'center',
        alignItems:'center',

    },

    functions2:{
        backgroundColor: '#FA8073',
        borderRadius: 100,
        overflow: 'hidden',
        width: 78,
        height:78,
        margin:8,
        justifyContent:'center',
        alignItems:'center',

    },

    numbers:{
        backgroundColor: '#D3D3D3',
        borderRadius: 100,
        overflow: 'hidden',
        width: 78,
        height:78,
        margin:8,
        justifyContent:'center',
        alignItems:'center',

    },
    
    letters:{
        color:'#FFFFFF',
        fontSize:30,

    },

    letters2:{
        color:'black',
        fontSize:30,

    },
});