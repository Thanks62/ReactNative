import React, {Component} from 'react';
import {Text, View, StyleSheet, Animated, Modal} from 'react-native';
class Card extends Component {
  //const slideAni = React.useRef(new Animated.Value(400)).current;
  constructor(props) {
    super(props);
    this.state = {
      slideAni: new Animated.Value(400),
      modal: true,
    };
  }

  componentDidUpdate() {
    Animated.timing(this.state.slideAni, {
      toValue: 0,
      duration: 800,
    }).start();
  }

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      this.setState({
        slideAni: new Animated.Value(400),
      });
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    return (
      <Animated.View style={([styles.ani], {top: this.state.slideAni})}>
        <View style={styles.card}>
          <Text style={styles.subTitle}>Ask Yourself</Text>
          <Text style={styles.subText}>
            What emotion am I experiencing right now?
          </Text>
        </View>
      </Animated.View>
    );
  }
}
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
  ani: {
    position: 'relative',
  },
  card: {
    height: 500,
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
