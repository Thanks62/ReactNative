import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  login = () => {
    
  };
  handleChangeName = (_name) => {
    this.setState({
      name: _name,
    });
  };
  handleChangePassword = (_password) => {
    this.setState({
      password: _password,
    });
  };
  render() {
    return (
      <View style={styles.ctn}>
        <Text style={styles.title}>Mood Diary</Text>
        <View style={styles.inputBlock}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            name="user"
            onChangeText={this.handleChangeName}
          />
        </View>
        <View style={styles.inputBlock}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            name="password"
            password={true}
            onChangeText={this.handleChangePassword}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  ctn: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  inputBlock: {
    width: 250,
    margin: 20,
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  input: {
    paddingVertical: 0,
    flex: 1,
    paddingHorizontal:10,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: 'rgb(255,108,75)',
    borderRadius: 20,
    height: 35,
    width: 90,
  },
  buttonText: {
    lineHeight: 34,
    color: '#fff',
  },
});
