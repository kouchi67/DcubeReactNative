/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  TouchableHighlight,
  AlertIOS,
  View
} from 'react-native';
import SimpleListComponent from './components/SimpleListComponent';
import FirebaseListComponent from './components/FirebaseListComponent';

class DcubeReactNative extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <FirebaseListComponent style={styles.listview} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  listview: {
    flex: 1,
  },
});

AppRegistry.registerComponent('DcubeReactNative', () => DcubeReactNative);
