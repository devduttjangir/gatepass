import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Theme from '../Utility/Theme';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AddUser extends Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};
    return {
      headerLeft: (
        <Icon
          name="close"
          color="white"
          size={24}
          style={styles.barButton}
          onPress={() => navigation.goBack()}></Icon>
      ),
      /* the rest of this config is unchanged */
    };
  };
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
        <View>
          <TextInput style={styles.loginInput} placeholder="Username" />
        </View>
        <View>
          <TextInput style={styles.loginInput} placeholder="Password" />
        </View>
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
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Dismiss"
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
  barButton: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
});
