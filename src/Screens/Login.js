import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Theme from '../Utility/Theme';
import LoginForm from './LoginForm';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.viewContainer}>
        <View />
        <View style={styles.loginContainer}>
          <View style={styles.logoContainer}>
            <Text style={styles.textContainer}> GatePass </Text>
          </View>
          <LoginForm />
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
    justifyContent: 'space-between',
  },
  textContainer: {
    height: 100,
  },
});
