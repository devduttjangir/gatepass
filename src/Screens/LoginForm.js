import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import Theme from '../Utility/Theme';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.loginFormContainer}>
        <View>
          <TextInput style={styles.loginInput} placeholder="Username" />
        </View>
        <View>
          <TextInput style={styles.loginInput} placeholder="Password" />
        </View>
        <View style={styles.submitButton}>
          <Button
            title="Submit"
            color={Theme.PRIMARY_COLOR}
            onPress={() => Alert.alert('Simple Button pressed')}
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
