import React, {Component} from 'react';
import {FlatList, SafeAreaView, View, Text, StyleSheet} from 'react-native';
const renderItem = ({item}) => {
  return (
    <View style={styles.motion}>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[styles.text, styles.name]}>
        {item.name}
      </Text>
      <Text style={[styles.text, styles.time]}>{item.time}</Text>
    </View>
  );
};
export default class List extends Component {
  render() {
    const {data} = this.props;
    return (
      <SafeAreaView style={styles.list}>
        <FlatList data={data} renderItem={renderItem} />
      </SafeAreaView>
    );
  }
}
var styles = StyleSheet.create({
  list: {
    height: 260,
    overflowY: 'scroll',
  },
  motion: {
    backgroundColor: 'rgb(245,237,226)',
    width: '90vw',
    borderRadius: 20,
    paddingHorizontal: 20,
    height: 50,
    marginTop: 10,
    flexDirection: 'row',
  },
  name: {
    flex:1,
    fontWeight: 'bold',
  },
  time: {
    color: '#bbbbbb',
  },
  text: {
    lineHeight: 50,
  },
});
