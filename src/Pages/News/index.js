import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import List from './List';
class Card extends Component {
  //const slideAni = React.useRef(new Animated.Value(400)).current;
  constructor(props) {
    super(props);
    this.state = {
      slideAni: new Animated.Value(400),
      modal: true,
      motion: '',
      data: [],
    };
  }

  componentDidUpdate() {
    Animated.timing(this.state.slideAni, {
      toValue: 0,
      duration: 800,
    }).start();
  }

  componentDidMount() {
    // this._navListener = this.props.navigation.addListener('didFocus', () => {
    this.setState({
      slideAni: new Animated.Value(400),
    });
    // });
  }

  setMotion = (text) => {
    this.setState({
      motion: text,
    });
  };

  handleSubmit = () => {
    let motion = {
      name: this.state.motion,
      time: new Date().toLocaleString(),
    };
    let res = [];
    res = res.concat(this.state.data, motion);
    //res.push(this.state.motion);
    this.setState({
      data: res,
    });
  };

  // componentWillUnmount() {
  //   this._navListener.remove();
  // }
  render() {
    // const {data} = this.state.data;
    return (
      <Animated.View style={([styles.ani], {top: this.state.slideAni})}>
        <View style={styles.card}>
          <Text style={styles.subTitle}>Ask Yourself</Text>
          <Text style={styles.subText}>
            What emotion am I experiencing right now?
          </Text>
          <TextInput style={styles.input} onChangeText={this.setMotion} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={this.handleSubmit}>
              Add
            </Text>
          </TouchableOpacity>
          <List data={this.state.data} />
        </View>
      </Animated.View>
    );
  }
}
export default class NewsScreen extends Component {
  goback = () => {
    this.props.navigation.navigate('Home');
  };
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
          <TouchableOpacity style={[styles.button, styles.Backbutton]}>
            <Text style={styles.buttonBackText} onPress={this.goback}>
              GO BACK
            </Text>
          </TouchableOpacity>
        </View>
        <Card navigation={this.props.navigation} />
      </>
    );
  }
}
var styles = StyleSheet.create({
  header: {
    height: 200,
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
  input: {
    width: 200,
    height: 30,
    marginTop: 30,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#eeeee',
  },
  button: {
    shadowColor: 'rgb(70,33,54)',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: 'rgb(70,33,54)',
    borderRadius: 20,
    height: 35,
    width: 120,
  },
  Backbutton: {
    backgroundColor: 'white',
    height: 20,
  },
  buttonText: {
    lineHeight: 34,
    color: '#fff',
  },
  ani: {
    position: 'relative',
  },
  card: {
    height: '90vh',
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'relative',
    top: -20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  subTitle: {
    color: '#bbb',
    lineHeight: 60,
  },
  subText: {
    textAlign: 'center',
    fontSize: 18,
    width: 200,
    lineHeight: 30,
  },
});
