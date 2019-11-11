import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from '../Utility/Loader';
import AsyncStorage from '@react-native-community/async-storage';
import Theme from '../Utility/Theme';

export default class UserList extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Visitor List',
      headerRight: (
        <Icon
          name="plus"
          color="white"
          size={24}
          style={styles.barButton}
          onPress={navigation.getParam('addUserHandler')}
          // onPress={() => navigation.navigate('AddUser')}
        ></Icon>
      ),
      headerLeft: (
        <Icon
          name="sign-out"
          color="white"
          size={24}
          style={styles.barButton}
          onPress={navigation.getParam('logoutHandler')}></Icon>
      ),
      /* the rest of this config is unchanged */
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      errorMsg: '',
      users: [],
    };
  }

  onPress = () => {
    this.props.navigate('AddUser');
  };
  componentDidMount() {
    this.props.navigation.setParams({addUserHandler: this.addUserHandler});
    this.props.navigation.setParams({logoutHandler: this.logoutHandler});
    this.handleGetVisitorList();
  }
  logoutHandler = async () => {
    await AsyncStorage.removeItem('userToken');
    this.props.navigation.navigate('Auth');
  };
  addUserHandler = () => {
    this.props.navigation.navigate('AddUser', {
      goBack: this.handleGetVisitorList,
    });
    // this.setState({count: this.state.count + 1});
  };
  handleGetVisitorList = async data => {
    this.setState({
      loading: true,
    });
    let error = '';
    try {
      let token = await AsyncStorage.getItem('userToken');
      console.log(this.state);
      let response = await fetch(
        'http://sbrnetworks.com/gatepass/api/visitor_list.php',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: token,
          }),
        },
      );
      let responseJson = await response.json();
      if (responseJson.status === '1') {
        let sorted = responseJson.visitor_list;
        sorted.sort(function(a, b) {
          return b.id - a.id;
        });
        this.setState({
          users: sorted,
          loading: false,
          errorMsg: error,
        });
      } else {
        error = 'Something went wrong';
      }
      console.log(responseJson);
      //return responseJson.movies;
    } catch (error) {
      this.setState({
        loading: false,
        errorMsg: error,
      });
    }
  };

  listItem = item => {
    return (
      <View style={styles.cellRowContainer}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={{width: 80, height: 80}}
              source={{
                uri:
                  'https://facebook.github.io/react-native/img/tiny_logo.png',
              }}
            />
          </View>
          <View style={styles.colContainer}>
            <View style={styles.rowContainer}>
              <View>
                <Text style={styles.titleStyle}>Name</Text>
                <Text style={styles.detailStyle}>{item.name}</Text>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View>
                <Text style={styles.titleStyle}>Visit Date</Text>
                <Text style={styles.detailStyle}>{item.visiting_date}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.seprator} />
        <View style={styles.rowContainer}>
          <View style={styles.leftView}>
            <Text style={styles.titleStyle}>Email Address</Text>
            <Text style={styles.detailStyle}>{item.emailAddress}</Text>
          </View>
          <View style={styles.rightView}>
            <Text style={styles.titleStyle}>Mobile Number</Text>
            <Text style={styles.detailStyle}>{item.mobilenumber}</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.leftView}>
            <Text style={styles.titleStyle}>Meet To</Text>
            <Text style={styles.detailStyle}>{item.meet_to}</Text>
          </View>
          <View style={styles.rightView}>
            <Text style={styles.titleStyle}>No of person</Text>
            <Text style={styles.detailStyle}>{item.no_of_person}</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.leftView}>
            <Text style={styles.titleStyle}>Address</Text>
            <Text style={styles.detailStyle}>{item.address}</Text>
          </View>
          <View style={styles.rightView}>
            <Text style={styles.titleStyle}>Reason</Text>
            <Text style={styles.detailStyle}>{item.reason}</Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.listContainer}>
        <Loader loading={this.state.loading} />
        <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => this.listItem(item)}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {},
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  cellRowContainer: {
    padding: 16,
    backgroundColor: Theme.PRIMARY_COLOR,
  },
  imageContainer: {},
  colContainer: {
    flex: 1,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {},
  barButton: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  titleStyle: {
    paddingHorizontal: 4,
    fontSize: Theme.FONT_SIZE_MEDIUM,
    color: Theme.PRIMARY_BACKGROUND_COLOR,
  },
  detailStyle: {
    padding: 4,
    fontWeight: '500',
    fontSize: Theme.FONT_SIZE_MEDIUM,
  },
  seprator: {
    paddingVertical: 4,
  },
  rightView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  leftView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
