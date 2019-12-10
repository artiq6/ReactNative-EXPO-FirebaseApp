import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

import colors from '../constants/Colors';
import Button from "./myButton";


class Home extends Component {
    static navigationOptions = {
        title: 'Login',
        headerStyle: {
            backgroundColor: colors.amber,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    goInit = () => {
        console.log("INIT")
        this.props.navigation.navigate("Init")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                    style={styles.image}
                        source={require('../assets/images/firebaseLogo.png')}
                        resizeMode="center"
                    ></Image>
                </View>
                <View style={styles.downside}>
                    
                    <Button
                        title="Login"
                        onPress={
                            this.goInit
                        }

                    ></Button>
                
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ffffff',
    },
    header: {
        justifyContent: "center",
        flex: 1,
        flexDirection: "column",
        backgroundColor: colors.blue,
    },
    downside: {
        flex: 1,
        display:"flex",
        justifyContent:"center",
    },
    image: {
        width: 350,
       display:"flex",
       alignSelf:"center"
    },
    headerText: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center"

    },
})
export default Home;