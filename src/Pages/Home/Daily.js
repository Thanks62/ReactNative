import React from 'react';
import {Animated, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideAni: new Animated.Value(-100),
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
        slideAni: new Animated.Value(-100),
      });
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    return (
      <Animated.View style={[styles.ani, {left: this.state.slideAni}]}>
        <TouchableOpacity>
          <View style={this.props.style}>
            <MaterialIcons
              name={this.props.icon}
              size={20}
              style={styles.icon}
            />
            <Text style={styles.icon}>STEP</Text>
            <Text style={styles.name}>Alana Jones</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
export default class Daily extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: 'HAPPY'};
  }

  render() {
    return (
      <View style={styles.story}>
        <Text style={styles.title}>Daily Challenage</Text>
        <View style={styles.cardCtn}>
          <Card
            navigation={this.props.navigation}
            style={styles.card_1}
            icon={'face'}
          />
          <Card
            navigation={this.props.navigation}
            style={styles.card_2}
            icon={'textsms'}
          />
          <Card
            navigation={this.props.navigation}
            style={styles.card_3}
            icon={'business'}
          />
        </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  story: {
    marginTop: 30,
  },
  title: {
    fontWeight: 'bold',
  },
  cardCtn: {
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    overflow: 'scroll',
  },
  ani: {
    position: 'relative',
  },
  card_1: {
    marginTop: 15,
    backgroundColor: 'rgb(255,108,75)',
    height: 120,
    borderRadius: 20,
    padding: 20,
    marginRight: 10,
  },
  card_2: {
    marginTop: 15,
    backgroundColor: 'rgb(180,58,81)',
    height: 120,
    borderRadius: 20,
    padding: 20,
    marginRight: 10,
  },
  card_3: {
    marginTop: 15,
    backgroundColor: 'rgb(70,32,53)',
    height: 120,
    borderRadius: 20,
    padding: 20,
    marginRight: 10,
  },
  icon: {
    height: 30,
    color: '#fff',
  },
  name: {
    fontSize: 10,
    color: '#fff',
    opacity: 0.5,
  },
});
