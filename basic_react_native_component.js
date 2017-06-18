// Basic Framework for a React Native Component.
import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

class MyApp extends Component {
  render() {
    return (
      <View>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);
