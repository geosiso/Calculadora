import React from 'react';
import { TouchableHighlight, Dimensions, StyleSheet, Text, View } from 'react-native';

const vw = Dimensions.get("screen").width;

export function Calculadora() {
    return (
        <View>
            <View style={styles.name}>
                <Text> Calculadora </Text> 
            </View>
            <View style={styles.visor}>
                <Text> 5252252</Text>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    name: {}
})