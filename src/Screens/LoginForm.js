import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import Theme from '../Utility/Theme';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogin = async () => {
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
            user_name: 'harish@sbrtelecom.com',
            password: 'harishh@123',
          }),
        },
      );
      let responseJson = await response.json();
      console.log(responseJson);
      //return responseJson.movies;
    } catch (error) {
      console.error(error);
    }
  };

  handleSubmit = () => {
    this.props.handleLoginCredentials({
      user_name: this.state.user_name,
      password: this.state.password,
    });
  };
  render() {
    return (
      <View style={styles.loginFormContainer}>
        <View>
          <TextInput
            style={styles.loginInput}
            type="username"
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={text => this.setState({user_name: text})}
            value={this.state.user_name}
          />
        </View>
        <View>
          <TextInput
            style={styles.loginInput}
            type="password"
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={text => this.setState({password: text})}
            value={this.state.password}
          />
        </View>
        <View style={styles.submitButton}>
          <Button
            title="Submit"
            color={Theme.PRIMARY_COLOR}
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginFormContainer: {
    padding: 20,
  },
  loginInput: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderColor: Theme.PRIMARY_BACKGROUND_COLOR,
    borderRadius: Theme.BORDER_RADIUS,
    paddingHorizontal: 16,
    borderWidth: 0.5,
    height: 44,
  },
  submitButton: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderColor: Theme.PRIMARY_COLOR,
    borderRadius: Theme.BORDER_RADIUS,
    paddingHorizontal: 16,
    borderWidth: 0.5,
    height: 44,
    color: Theme.PRIMARY_COLOR,
    backgroundColor: Theme.PRIMARY_BACKGROUND_COLOR,
  },
});
