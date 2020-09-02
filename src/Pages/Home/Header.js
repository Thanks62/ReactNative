import React from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../../redux/action';
class Header extends React.Component {
  logout() {
    this.props.onLogout();
    this.props.navigation.navigate('Login')
  }
  render() {
    const day = new Date().toDateString();
    const user = 'Jane';
    let img;
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      img = (
        <Image
          source={require('../../../public/head.jpg')}
          style={styles.thumbnail}
        />
      );
    } else {
      img = (
        <img
          src="../../../public/head.jpg"
          width="55px"
          style={{borderRadius: '30px'}}
        />
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.date}>{day}</Text>
          <Text style={styles.user}>
            Hello, {user}
            {/* {this.props.LoginStatus.user}! */}
          </Text>
        </View>
        <View style={styles.head}>
          {img}
          <Text
            style={styles.logOut}
            onPress={() => {
              this.logout.bind(this);
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
