import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
export default class Header extends React.Component {
  render() {
    const day = new Date().toDateString();
    const user = 'Jane';
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.date}>{day}</Text>
          <Text style={styles.user}>Hello, {user}!</Text>
        </View>
        <View style={styles.head}>
          <Image
            style={styles.img}
            source={require('../../../public/head.jpg')}
          />
          <Text style={styles.logOut}>Log out</Text>
        </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  text: {
    flex: 1,
  },
  date: {
    fontSize: 10,
    color: '#999',
    opacity: 0.5,
    fontWeight: 'bold',
  },
  user: {
    fontSize: 18,
    color:'#595959',
    fontWeight: 'bold',
    marginTop: 8,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  logOut:{
    textDecorationColor:"tomato",
    textDecorationLine:"underline",
    color:"tomato"
  },
  head: {},
});
