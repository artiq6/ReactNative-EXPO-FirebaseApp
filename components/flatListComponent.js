import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from "../constants/Colors"
import Button from "./myButton"
import Graphic from './Graphic'
class flatListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  click = () => {
    console.log("TEST")
    this.props.nav.navigate("Maps", {longitude:this.props.longitude,latitude:this.props.latitude})
  }
  render() {

    return (

      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.heading}>{this.props.stationName}</Text>
          <View style={styles.bottom}>
            <View style={styles.coords}>
              <Text style={styles.text}>long: {Math.round(this.props.longitude*100)/100}</Text>
              <Text style={styles.text}>lati: {Math.round(this.props.latitude*100)/100}</Text>
              <Text style={styles.text}>wszystkie: {this.props.totalDocks}</Text>
            </View>
            <View style={styles.graphic}>
                <Graphic available={this.props.available} unavailable={this.props.unavailable} status={this.props.status}></Graphic>
            </View>
          </View>
          <View style={styles.buttonRow}><Button onPress={this.click} title="MAPA" style={styles.button} text={styles.buttonText} ></Button></View>
        </View>
      </View>
    );

  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 15,
    elevation: 2,
    display: "flex",
    flexDirection: "column",
  },
  text:{
    fontSize:12,
    color:colors.navy,
    margin:2,
  },
  coords: {
    padding:5,
    flex: 1,
    
  },
  graphic: {
    flex: 2,
    padding:5
    
  },
  bottom: {
    flex: 9,
    display: "flex",
    flexDirection: "row",
  },
  buttonRow: {
    flex: 1,
    alignItems: "flex-end"
  },
  button: {
    backgroundColor: "transparent",
    justifyContent: "center",
    width: 50,
    height: 25,
  },
  buttonText: {
    fontSize: 12,
    color: colors.amber
  }
});
export default flatListComponent;