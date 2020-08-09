import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
export default class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: 'HAPPY'};
  }

  render() {
    return (
      <View style={styles.story}>
        <Text style={styles.title}>Feature Story</Text>
        <View style={styles.card}>
          <Text style={styles.icon}>ICON</Text>
          <Text style={styles.name}>Alana Jones</Text>
          <Text>Change Nagative Thinking</Text>
          <Text>Patterns for Good</Text>
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
  card: {
    width: 320,
    marginTop: 15,
    backgroundColor: 'rgb(248,240,234)',
    height: 120,
    borderRadius: 20,
    padding: 20,
  },
  icon: {
    height: 30,
  },
  name: {
    fontSize: 10,
    color: '#999',
    opacity: 0.5,
  },
});
