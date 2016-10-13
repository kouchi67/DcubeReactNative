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
import ActionButton from './ActionButton';

const firebase = require('firebase');
const firebaseConfig = {
  apiKey: "AIzaSyBwutMMBHeI4Lhl4kLRQ_8HTyscjj7vrUw",
  authDomain: "https://dcube-reactnative-firebase.firebaseapp.com",
  databaseURL: "https://dcube-reactnative-firebase.firebaseio.com",
  storageBucket: "",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class FirebaseListComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = firebaseApp.database().ref().child('items');
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  _addItem() {
    AlertIOS.prompt(
      'Add New Item',
      null,
      [
        {
          text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'
        },
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          }
        },
      ],
      'plain-text'
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.listview}
          dataSource={this.state.dataSource}
          renderRow={(item, sectionID, rowID) =>
            <View key={item._key} style={styles.row}>
              <Text>{item.title}</Text>
            </View>
          }
          renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
            <View key={rowID} style={styles.separator} />
          }
        />
        <ActionButton style={styles.button} onPress={this._addItem.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listview: {
    flex: 1,
  },
  row: {
    height: 44,
    backgroundColor: '#FACA9B',
  },
  separator: {
    height: 1,
    backgroundColor: '#EB9532',
  },
  button: {
    height: 50,
    backgroundColor: '#83D6DE',
  }
});
