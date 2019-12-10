import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import colors from '../constants/Colors';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAth33UdO1mH9_0qszRkkLgweifDxLqChg",
    authDomain: "haluch4ia2.firebaseapp.com",
    databaseURL: "https://haluch4ia2.firebaseio.com",
    projectId: "haluch4ia2",
    storageBucket: "haluch4ia2.appspot.com",
    messagingSenderId: "730002395569",
    appId: "1:730002395569:web:5a17c16575a010dd312d90",
    measurementId: "G-KWEJ5FZW85"
};

firebase.initializeApp(config);

class Init extends Component {
    //NAV TURN OFF
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount = async () => {
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                this.props.navigation.navigate("Stations",{user:user.email})
                console.log("user :",user.email)
            }
            else {
                this.props.navigation.navigate("Login")
            }


        })
    }

    render() {
        return (
            <View style={[styles.container, styles.horizontal]}>
                  <ActivityIndicator size="large" color={colors.amber} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})
export default Init;