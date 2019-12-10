import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/Colors'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={this.props.style != undefined ? this.props.style : styles.block}>
                <Text style={this.props.text != undefined ? this.props.text : styles.text}>{this.props.title}</Text>
            </TouchableOpacity >
        );
    } 
}
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color:"white",
        textAlign:"center",
    },
    block:{
        backgroundColor:colors.amber,
        justifyContent:"center",
        width:100,
        height:50,
        alignSelf:"center",
        borderRadius: 50,
        margin:10,
    }
});
export default Button;