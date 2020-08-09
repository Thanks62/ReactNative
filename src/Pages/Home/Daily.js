import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const Card = (props) => {
  return (
    <TouchableOpacity>
      <View style={props.style}>
        <Text style={styles.icon}>ICON</Text>
        <Text style={styles.name}>Alana Jones</Text>
      </View>
    </TouchableOpacity>
  );
};
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
          <Card style={styles.card_1} />
          <Card style={styles.card_2} />
          <Card style={styles.card_3} />
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
  card_1: {
    marginTop: 15,
    backgroundColor: 'rgb(255,108,75)',
    height: 120,
    borderRadius: 20,
    padding: 20,
    marginRight:10
  },
  card_2: {
    marginTop: 15,
    backgroundColor: 'rgb(180,58,81)',
    height: 120,
    borderRadius: 20,
    padding: 20,
    marginRight:10
  },
  card_3: {
    marginTop: 15,
    backgroundColor: 'rgb(70,32,53)',
    height: 120,
    borderRadius: 20,
    padding: 20,
    marginRight:10
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
