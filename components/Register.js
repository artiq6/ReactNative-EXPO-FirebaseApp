import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import colors from '../constants/Colors';
import Button from "./myButton"
import firebase from 'firebase';


class Home extends Component {
    static navigationOptions = {
        title: 'Register',
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
            password: "",
            errorMessage: "",
        };
    }
    register = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() =>  this.props.navigation.navigate("Init") )
            .catch(error => this.setState({ errorMessage: error.message }))
    }
    goLogin = () =>{
        this.props.navigation.navigate("Login")
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

                <View style={styles.header}>
                    <Text style={styles.headerText}>Register</Text>
                </View>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                    />
                    <TextInput
                    secureTextEntry={true}
                        style={styles.input}
                        placeholder="Hasło"
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                    />
                    <Text style={styles.error}>{this.state.errorMessage}</Text>
                    <Button
                        title="Register"
                        onPress={
                            this.register
                        }
                    />
                    <Button
                        title="Login"
                        onPress={
                            this.goLogin
                        }
                    />
                </View>
            </KeyboardAvoidingView >
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
        backgroundColor: colors.yellow,
    },
    headerText: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 58
    },
    error: {
        textAlign: "center",
        color: colors.errorText,
        fontSize: 14
    },
    form: {
        justifyContent: "center",
        flex: 2,
        flexDirection: "column"
    },
    input: {
        borderRadius: 50,
        borderColor: colors.amber,
        borderWidth: 1,
        textAlign: "center",
        height: 50,
        fontSize: 24,
        margin: 5,
    }
})
export default Home;