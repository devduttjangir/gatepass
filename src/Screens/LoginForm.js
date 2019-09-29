import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Theme from '../Utility/Theme';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <View>
          <TextInput style={styles.loginInput} placeholder="Username" />
        </View>
        <View>
          <TextInput style={styles.loginInput} placeholder="Password" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginFormContainer: {
    flex: 1,
  },
  loginInput: {
    marginHorizontal: 16,
    marginTop: 8,
    borderColor: Theme.PRIMARY_COLOR,
    padding: 16,
    borderWidth: 2,
  },
});
