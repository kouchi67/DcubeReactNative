import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ListView,
  TouchableHighlight,
  AlertIOS,
  View
} from 'react-native';
import ActionButton from './ActionButton';

export default class SimpleListComponent extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'row 1', 'row 2', 'row 3', 'row 4', 'row 5',
        'row 6', 'row 7', 'row 8', 'row 9'
      ]),
    };
  }

  render() {
    return (
      <ListView
        style={styles.listview}
        dataSource={this.state.dataSource}
        renderRow={(item) =>
          <View style={styles.row} key={item._key}>
            <Text>{item}</Text>
          </View>
        }
        renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
          <View style={styles.separator} />
        }
      />
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
  }
});
