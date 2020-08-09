import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
//import styles from './style';
export default class NewsScreen extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text>What's new?</Text>
        <Text>What you think is interesting?</Text>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(70, 33, 54)',
    color: '#000000',
    textAlign: 'center',
  },
});
