import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Theme from '../Utility/Theme';
import LoginForm from './LoginForm';
import Loader from '../Utility/Loader';
import AsyncStorage from '@react-native-community/async-storage';
export default class Login extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Login',
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      errorMsg: '',
    };
  }

  handleLoginCredentials = data => {
    console.log(data);
    this.setState({
      loading: true,
    });
    this.handleLogin(data);
  };
  handleLogin = async data => {
    //'harish@sbrtelecom.com'
    //harishh@123
    let error = '';
    try {
      console.log('login called');
      let response = await fetch(
        'http://sbrnetworks.com/gatepass/api/login.php',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_name: data.user_name,
            password: data.password,
          }),
        },
      );
      let responseJson = await response.json();
      if (responseJson.status === '1') {
        this.storeData(responseJson.token);
      } else {
        error = 'Invalid Login Details';
      }
      console.log(responseJson);
      this.setState({
        loading: false,
        errorMsg: error,
      });
      //return responseJson.movies;
    } catch (error) {
      this.setState({
        loading: false,
        errorMsg: 'Invalid Login Details',
      });
    }
  };

  storeData = async token => {
    try {
      await AsyncStorage.setItem('userToken', token);
      this.props.navigation.navigate('App');
    } catch (e) {
      // saving error
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.viewContainer}>
        <View />
        <Loader loading={this.state.loading} />
        <View style={styles.loginContainer}>
          {/* <View style={styles.logoContainer}>
            <Text style={styles.textContainer} />
          </View> */}
          <View>
            <Text style={styles.errorContainer}>{this.state.errorMsg}</Text>
            <LoginForm handleLoginCredentials={this.handleLoginCredentials} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: Theme.PRIMARY_COLOR,
  },
  logoContainer: {
    alignItems: 'center',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  textContainer: {
    height: 100,
    fontSize: 48,
  },
  errorContainer: {
    alignItems: 'center',
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
  },
});
