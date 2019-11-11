import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Theme from '../Utility/Theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from '../Utility/Loader';
import AsyncStorage from '@react-native-community/async-storage';

export default class AddUser extends Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: 'Add Visitor',
      headerLeft: (
        <Icon
          name="close"
          color="black"
          size={24}
          style={styles.barButton}
          onPress={navigation.getParam('goBackHandler')}></Icon>
      ),
      /* the rest of this config is unchanged */
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      errorMsg: '',
    };
  }
  componentDidMount() {
    this.props.navigation.setParams({goBackHandler: this.goBackHandler});
  }
  goBackHandler = () => {
    this.props.navigation.goBack();
    this.props.navigation.state.params.goBack();
  };
  handleAddVisitor = async data => {
    this.setState({
      loading: true,
    });
    let error = '';
    try {
      let token = await AsyncStorage.getItem('userToken');
      console.log(this.state);
      let response = await fetch(
        'http://sbrnetworks.com/gatepass/api/visitor_registration.php',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: token,
            name: this.state.name,
            emailAddress: this.state.email_address,
            mobilenumber: this.state.mobile,
            meet_to: this.state.meet_to,
            reason: this.state.reason,
            no_of_person: this.state.no_of_person,
            address: this.state.address,
            images: 'image',
          }),
        },
      );
      let responseJson = await response.json();
      if (responseJson.status === '1') {
        this.props.navigation.goBack();
      } else {
        error = 'Something went wrong';
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
        errorMsg: error,
      });
    }
  };

  render() {
    console.log('JSON.strin', this.props);
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.loginFormContainer}>
              <Loader loading={this.state.loading} />

              <View>
                <TextInput
                  style={styles.loginInput}
                  placeholder="Name"
                  onChangeText={text => this.setState({name: text})}
                  value={this.state.name}
                />
              </View>
              <View>
                <TextInput
                  style={styles.loginInput}
                  keyboardType="email-address"
                  placeholder="Email Address"
                  onChangeText={text => this.setState({email_address: text})}
                  value={this.state.email_address}
                />
              </View>
              <View>
                <TextInput
                  style={styles.loginInput}
                  keyboardType="phone-pad"
                  placeholder="Mobile Number"
                  onChangeText={text => this.setState({mobile: text})}
                  value={this.state.mobile}
                />
              </View>
              <View>
                <TextInput
                  style={styles.loginInput}
                  placeholder="Meet To"
                  onChangeText={text => this.setState({meet_to: text})}
                  value={this.state.meet_to}
                />
              </View>
              <View>
                <TextInput
                  style={styles.loginInput}
                  placeholder="Reason"
                  onChangeText={text => this.setState({reason: text})}
                  value={this.state.reason}
                />
              </View>
              <View>
                <TextInput
                  style={styles.loginInput}
                  keyboardType="number-pad"
                  placeholder="No of person"
                  onChangeText={text => this.setState({no_of_person: text})}
                  value={this.state.user_name}
                />
              </View>
              <View>
                <TextInput
                  style={styles.loginInput}
                  placeholder="Address"
                  onChangeText={text => this.setState({address: text})}
                  value={this.state.address}
                />
              </View>
              <View style={styles.submitButton}>
                <Button
                  title="Submit"
                  color={Theme.PRIMARY_COLOR}
                  onPress={this.handleAddVisitor}
                />
              </View>
              <View style={{flex: 1}} />
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginFormContainer: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-end',
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
