import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
  AlertIOS,
  View
} from 'react-native';

export default class ActionButton extends Component {

  render() {
    return (
      <View>
        <TouchableHighlight
          underlayColor={'#A3F6FE'}
          onPress={this.props.onPress}
          style={styles.button}>
          <Text>addItem</Text>
        </TouchableHighlight>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#83D6DE',
  },
});
