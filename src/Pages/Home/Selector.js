import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
export default class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    return (
      <View style={styles.selector}>
        <Text style={styles.title}>Today I'm feeling</Text>
        <View style={styles.operate}>
          <TextInput
            onChange={this.handleChange}
            style={styles.input}
            defaultValue="Happy"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('News')}>
            <Text style={styles.buttonText}>Explore →</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  selector: {
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#595959',
  },
  operate: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  input: {
    fontSize: 24,
    color: '#aaa',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    width: 150,
    marginRight: 20,
  },
  button: {
    shadowColor: 'rgb(255,108,75)',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: 'rgb(255,108,75)',
    borderRadius: 20,
    height: 35,
    width: 120,
  },
  buttonText: {
    lineHeight: 34,
    color: '#fff',
  },
});
