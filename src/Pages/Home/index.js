import React, {Component} from 'react';
import Header from './Header';
import Selector from './Selector';
import Story from './Story';
import Daily from './Daily';
// import {connect} from 'react-redux';
import {
  // Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  // TouchableOpacity,
} from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{}, {}, {}],
    };
  }

  // componentWillMount() {
  //   if (!this.props.LoginStatus) {
  //     this.props.navigation.navigate('Login');
  //   }
  // }

  // componentDidMount() {
  //   this._navListener = this.props.navigation.addListener('didFocus', () => {
  //     if (!this.props.LoginStatus) {
  //       this.props.navigation.navigate('Login');
  //     }
  //   });
  // }

  // componentWillUnmount() {
  //   this._navListener.remove();
  // }

  render() {
    return (
      <ScrollView>
        <View style={styles.body}>
          <Header navigation={this.props.navigation} />
          <Selector navigation={this.props.navigation} />
          <Story />
          <Daily navigation={this.props.navigation} />
          <FlatList
            data={this.state.data}
            style={styles.list}
            renderItem={this.renderBook.bind(this)}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    );
  }

  renderBook({item}) {
    return (
      <View style={styles.container}>
        {/* <Image
          source={require('../../../public/book.jpg')}
          style={styles.thumbnail}
        /> */}
        <View style={styles.rightContainer}>
          <View style={styles.titleWithout}>
            <Text style={styles.title}>Emotion Management</Text>
            <Text style={styles.tip}>HOT</Text>
          </View>
          <Text style={styles.score}>
            <Text style={styles.grade}> 180 </Text>comments
          </Text>
          <Text style={styles.starring}>Author : Joshua</Text>
          <Text style={styles.cinema}>2012-01-02</Text>
        </View>
        <Text style={styles.buy}>More</Text>
      </View>
    );
  }
}
// const Index = connect((state) => ({
//   LoginStatus: state.login,
// }))(HomeScreen);
export default HomeScreen;
var styles = StyleSheet.create({
  body: {
    height: 900,
    overflow: 'scroll',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    height: 20,
    marginTop: 44,
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 18,
  },
  titleWithout: {
    flexDirection: 'row',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    marginTop: 4,
  },
  tip: {
    backgroundColor: 'rgb(255,108,70)',
    fontSize: 8,
    textAlign: 'center',
    color: '#fff',
    height: 14,
    width: 30,
    lineHeight: 14,
    borderRadius: 2,
    marginLeft: 4,
    marginTop: 4,
  },
  score: {
    paddingTop: 8,
    fontSize: 12,
    color: '#666',
  },
  starring: {
    paddingTop: 4,
    fontSize: 12,
    color: '#666',
  },
  cinema: {
    paddingTop: 4,
    fontSize: 12,
    color: '#666',
  },
  buy: {
    fontSize: 12,
    // color:'#333',
    width: 46,
    height: 24,
    lineHeight: 24,
    textAlign: 'center',
    backgroundColor: 'rgb(180,58,81)',
    color: '#fff',
    borderRadius: 12,
    marginRight: 20,
  },
  grade: {
    color: '#DF8D7A',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 63,
    height: 85,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  list: {
    backgroundColor: '#F5FCFF',
  },
  headerOutline: {
    backgroundColor: '#fff',
    marginTop: 44,
  },
  headerInside: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 6,
    paddingTop: 10,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
  trendIcon: {
    width: 10,
    height: 14,
    marginLeft: 10,
    marginTop: -1,
  },
  trendText: {
    height: 22,
    color: '#333',
    fontWeight: 'bold',
  },
  trendR: {
    color: '#333',
    fontSize: 10,
    fontWeight: 'bold',
    height: 22,
  },
  trendRText: {},
  trendMoney: {
    color: '#D24349',
  },
});
