import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import colors from '../constants/Colors'


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MapView
        initialRegion={{
          latitude: this.props.navigation.state.params.latitude,
          longitude: this.props.navigation.state.params.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{  // required style for map appearance
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        }}
      >
          <MapView.Marker
            key={1}
            pinColor={colors.amber}
            coordinate={{
              latitude: this.props.navigation.state.params.latitude,
              longitude:this.props.navigation.state.params.longitude,
            }}
            title={"NAZWA"}
            description={"STACJA"}
          />
      </MapView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1abc9c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Map;
