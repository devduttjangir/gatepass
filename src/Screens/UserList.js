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

export default class UserList extends Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <Icon
          name="plus"
          color="white"
          size={24}
          style={styles.barButton}
          onPress={() => navigation.navigate('AddUser')}></Icon>
      ),
      headerLeft: (
        <Icon
          name="sign-out"
          color="white"
          size={24}
          style={styles.barButton}
          onPress={this.loginWithFacebook}></Icon>
      ),
      /* the rest of this config is unchanged */
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: '2',
          name: 'Naresh Kumar',
          emailAddress: 'nresh@gmail.com',
          mobilenumber: '77777777',
          meet_to: 'Dev',
          reason: 'office',
          no_of_person: '3',
          address: 'Gurgaon',
          visiting_date: '2019-09-08 02:26:40',
          images: '5d731560ee1b4.jpg',
        },
        {
          id: '3',
          name: 'Ajay Kumar',
          emailAddress: 'Ajay@gmail.com',
          mobilenumber: '88888888',
          meet_to: 'Rajesh',
          reason: 'office',
          no_of_person: '2',
          address: 'Gurgaon',
          visiting_date: '2019-09-08 02:34:22',
          images: '5d73172dedac0.jpg',
        },
        {
          id: '4',
          name: 'Ajay Kumar',
          emailAddress: 'Ajay@gmail.com',
          mobilenumber: '88888888',
          meet_to: 'tesr',
          reason: 'visit',
          no_of_person: '2',
          address: 'Gurgaon',
          visiting_date: '2019-09-08 11:11:10',
          images: '5d74e1ce2a08e.jpg',
        },
      ],
    };
  }

  listItem = item => {
    return (
      <View style={styles.cellRowContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={{width: 80, height: 80}}
              source={{
                uri:
                  'https://facebook.github.io/react-native/img/tiny_logo.png',
              }}
            />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Text>{item.visiting_date}</Text>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <Text>{item.emailAddress}</Text>
          <Text>{item.mobilenumber}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text>{item.meet_to}</Text>
          <Text>{item.no_of_person}</Text>
        </View>
        <Text>{item.address}</Text>
        <Text>{item.reason}</Text>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.listContainer}>
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
  cellRowContainer: {
    padding: 16,
  },
  imageContainer: {},
  rowContainer: {
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
});
