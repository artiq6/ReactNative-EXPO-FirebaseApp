import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, FlatList, ActivityIndicator,BackHandler } from 'react-native';
import Button from "./myButton"
import FlatListComponent from "./flatListComponent";
import colors from "../constants/Colors"
import firebase from "firebase"
import Colors from '../constants/Colors';



class Stations extends Component {
   static navigationOptions = {
      title: 'Stations',
      headerLeft: null,
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
         loaded: false,
         user: this.props.navigation.state.params.user,
      }
      this.stations = this.getFirebase().child("stations") // "stations" to nazwa tablicy w obiekcie jsona
   }
   getFirebase() {
      return firebase.database().ref()
   }
   logout = () => {
      firebase.auth()
         .signOut()
         .then(() => alert("logout"))
         .catch((error) => alert(error))
   }
   componentDidMount() {

      this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
         console.log("ok nic nie robię :)");
         return true;
       });

      this.stations.on("value", (elements) => {
         // wykonaj foreach na tej kolekcji, wpisując potrzebne dane do tablicy w state
         var data = [];
         elements.forEach((item) => {
            var obj =
            {
               stationName: item.val().stationName,
               longitude: item.val().longitude,
               latitude: item.val().latitude,
               id: item.val().id,
               availableBikes: item.val().availableBikes,
               availableDocks: item.val().availableDocks,
               totalDocks: item.val().totalDocks,
               status: item.val().statusValue,
            }
            data.push(obj)
         })

         //state
         this.setState({
            dane: data,
            loaded: true,
         })
         console.log(this.state.dane);

      })
   }

   render() {
      return (
         <View style={{ flex: 1 }}>
            {this.state.loaded ?
               <View style={{ flex: 1 }}>
                  <View style={{
                     flex: 1, justifyContent: "center", alignItems: "center", borderColor: "rgba(0,0,0,0.2)",
                     borderWidth: 1,
                  }}>
                     <Text style={{ color: colors.amber }}>Zalogowany jako {this.state.user}</Text>
                     <Button onPress={this.logout} title="Wyloguj" style={styles.button} text={styles.buttonText} ></Button>
                  </View>
                  <View style={{ flex: 10 }}>
                     <FlatList
                        style={{ flex: 1 }}
                        keyExtractor={(item, index) => item + index}
                        data={this.state.dane}
                        renderItem={({ item, index }) =>
                           <FlatListComponent
                              stationName={item.stationName}
                              latitude={item.latitude}
                              longitude={item.longitude}
                              totalDocks={item.totalDocks}
                              available={item.availableBikes}
                              unavailable={item.availableDocks}
                              status={item.status}
                              nav={this.props.navigation}
                           >
                           </FlatListComponent>}
                     />
                  </View>
               </View>
               :
               <ActivityIndicator style={{ alignSelf: "center" }} size="large" color={Colors.orange} />
            }
         </View>
      );

   }
}
const styles = StyleSheet.create({
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
})
export default Stations;