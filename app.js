import React, { Component } from 'react';
import {
  NativeModules,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNativeBridgeExample extends Component {

  componentDidMount () {
    const volume = NativeModules.Volume;
    volume.getSystemVolume((error, volume) => window.alert(volume))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit app.js
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
