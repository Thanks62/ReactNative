import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
const Card = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.subTitle}>Ask Yourself</Text>
      <Text style={styles.subText}>What emotion am I experiencing right now?</Text>
    </View>
  );
};
export default class NewsScreen extends Component {
  render() {
    return (
      <>
        <View style={styles.header}>
          <View style={styles.textBlock}>
            <Text style={styles.title}>Give it a name</Text>
            <Text style={styles.text}>
              Naming emotions gives us the chance to take a step back and make
              choice about what to do with them
            </Text>
          </View>
        </View>
        <Card />
      </>
    );
  }
}
var styles = StyleSheet.create({
  header: {
    flex: 0.4,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: 'rgb(70, 33, 54)',
  },
  textBlock: {
    width: 240,
  },
  title: {
    fontSize: 18,
    opacity: 0.8,
    textAlign: 'center',
    color: '#fff',
    lineHeight: 50,
  },
  text: {
    opacity: 0.5,
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
  },
  card: {
    flex: 1,
    padding:30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'relative',
    top: -20,
    backgroundColor: '#fff',
    alignItems:'center'
  },
  subTitle:{
    color:'#bbb',
    lineHeight:60,
  },
  subText:{
    textAlign:'center',
    fontSize:18,
    width:200,
    lineHeight:30
  }
});
