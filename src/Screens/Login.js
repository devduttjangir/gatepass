import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Theme from '../Utility/Theme';
import LoginForm from './LoginForm'

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.loginContainer}>
        <View>
          <Text style={styles.textContainer}> Login </Text>
        </View>
        <LoginForm />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: Theme.PRIMARY_BACKGROUND_COLOR,
  },
  textContainer: {
    height: 100,
  },
});
