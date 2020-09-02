import React, {Component} from 'react';
import {login} from '../../redux/action';
import fetchData from '../server/fetchData';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btn: 'Login',
      modalVisible: false,
    };
  }
  login = () => {
    if (this.state.name === '' || this.state.name === undefined) {
      alert('User name is required');
      this.setState({
        message: 'User name is required',
        modalVisible: true,
      });
      return false;
    }
    if (this.state.password == '' || this.state.password === undefined) {
      alert('Password is required');
      this.setState({
        message: 'Password is required',
        modalVisible: true,
      });
      return false;
    }
    this.setState({
      btn: '...Login',
    });
    fetchData(
      'http://localhost:3000',
      //'http://192.168.2.107:3000/',
      `userName=${this.state.name}&password=${this.state.password}`,
      this.callbackSuccess,
      this.callbackFailed,
    );
  };

  callbackSuccess = () => {
    this.props.onLogin(this.state.name);
    this.props.navigation.navigate('Home');
    this.setState({
      btn: 'Login',
    });
  };

  callbackFailed = (message) => {
    this.setState({
      message: message,
      modalVisible: true,
      btn: 'Login',
    });
    alert(message);
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
      <ImageBackground
        source={require('../../../public/login.png')}
        style={{width: '100%', height: '100%'}}>
        {Platform.OS==="web"?<View style={styles.webBg} />:null}
        <View style={styles.ctn}>
          {/* <Modal
            transparent={true}
            animationType="slide"
            visible={this.state.modalVisible}>
            <View style={styles.modal}>
              <Text>{this.state.message}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.setState({modalVisible: false});
                }}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal> */}
          {/* <Text style={styles.title}>Mood Diary</Text> */}
          <KeyboardAvoidingView style={styles.loginBlock} behavior="height">
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
                secureTextEntry={true}
                onChangeText={this.handleChangePassword}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={this.login}>
              <Text style={styles.buttonText}>{this.state.btn}</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    );
  }
}
const LoginScreen = connect(
  (state) => ({
    LoginStatus: state,
  }),
  {onLogin: login, onLogout: login},
)(Login);
export default LoginScreen;
var styles = StyleSheet.create({
  webBg:{
    position:"fixed",
    zInde:"-1",
    width:"100vw",
    height:"100vh",
    backgroundSize:"100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundImage:'url(../../../public/login.png)',
  },
  ctn: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    margin: 20,
    marginTop: 290,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    marginTop: 160,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  loginBlock: {
    marginTop: 350,
    padding: 15,
    backgroundColor: 'white',
    opacity: 0.8,
    borderRadius: 20,
    alignItems: 'center',
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
    paddingHorizontal: 10,
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
    shadowColor: 'rgb(255,108,75)',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
  },
  buttonText: {
    lineHeight: 34,
    color: '#fff',
  },
});
