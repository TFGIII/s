import React from "react";
import { View, StylesSheet } from "react-native-web";

const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 48,
        fontWeight: "bold",
        color: '#ffffff'
    },
    body: {
        color: '#949494',
    },
    btn: {
        color: "#d46313",
    }


  });