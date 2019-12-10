import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import colors from "../constants/Colors"
class Graphic extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props.status)
    return (


      <View style={styles.container}>
        <View style={styles.top}>
          <View style={[styles.available, { flex: this.props.available }]}>
            <Text>A</Text>
          </View>
          <View style={[styles.unavailable, { flex: this.props.unavailable }]}>
            <Text>U</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          {this.props.status != "In Service" ?
            <View style={styles.availableBottom}><Text style={{textAlign:"center"}}>Dostępny</Text></View>
            :
            <View style={styles.unavailableBottom}><Text style={{textAlign:"center"}}>Niedostępny</Text></View>
          }
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
    margin: 5,
    display: "flex",
    flexDirection: "column",
  },
  text: {
    fontSize: 12,
    color: colors.navy,
    margin: 2,
  },
  top: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  available: {
    backgroundColor: colors.green,
    height: 30

  },
  unavailable: {
    backgroundColor: colors.red,
    height: 30,
  },
  bottom: {
    flex: 1,
    height:30,
  },
  heading: {
    fontSize: 20,
    color: colors.navy,
    alignSelf: "center",
  },
  unavailableBottom: {
    flex: 1,
    backgroundColor: colors.yellow,
    justifyContent:"center"
  },
  availableBottom: {
    flex: 1,
    backgroundColor: colors.blue,
    
  },
});
export default Graphic;