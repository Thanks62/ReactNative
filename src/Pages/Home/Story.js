import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
          <View style={styles.iconBor}>
            {/* <MaterialIcons style={styles.icon} name={'favorite'}/> */}
          </View>
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
    flex:1,
    marginTop: 15,
    backgroundColor: 'rgb(248,240,234)',
    height: 120,
    borderRadius: 20,
    padding: 20,
  },
  iconBor:{
    alignItems:'flex-end',
  },
  icon: {
    fontSize:25,
    color:'pink',
    height: 30,
  },
  name: {
    fontSize: 10,
    color: '#999',
    opacity: 0.5,
  },
});
