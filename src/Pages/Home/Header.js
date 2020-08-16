import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../../redux/action';
class Header extends React.Component {
  logout = () => {
    this.props.onLogout();
    this.props.navigation.navigate('Login')
  };
  render() {
    const day = new Date().toDateString();
    const user = 'Jane';
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.date}>{day}</Text>
          <Text style={styles.user}>Hello, {this.props.LoginStatus.user}!</Text>
        </View>
        <View style={styles.head}>
          <Image
            style={styles.img}
            source={require('../../../public/head.jpg')}
          />
          <Text
            style={styles.logOut}
            onPress={() => {
              this.logout();
            }}>
            Log out
          </Text>
        </View>
      </View>
    );
  }
}
const HeaderWrapper = connect(
  (state) => ({
    LoginStatus: state,
  }),
  {onLogout: logout},
)(Header);
export default HeaderWrapper;
var styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  text: {
    flex: 1,
  },
  date: {
    fontSize: 10,
    color: '#999',
    opacity: 0.5,
    fontWeight: 'bold',
  },
  user: {
    fontSize: 18,
    color: '#595959',
    fontWeight: 'bold',
    marginTop: 8,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  logOut: {
    textDecorationColor: 'tomato',
    textDecorationLine: 'underline',
    color: 'tomato',
  },
  head: {},
});
