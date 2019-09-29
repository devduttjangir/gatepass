import React, {Component} from 'react';
import {Text, View, FlatList, SafeAreaView, StyleSheet} from 'react-native';

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ],
    };
  }

  listItem = item => {
    return (
      <View>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
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
});
