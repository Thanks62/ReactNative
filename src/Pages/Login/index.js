import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
export default class LoginScreen extends Component {
  render() {
    return (
      <View>
        <Text>Diary</Text>
        <Text>Username:</Text>
        <TextInput />
        <Text>Password:</Text>
        <TextInput password />
      </View>
    );
  }
}
