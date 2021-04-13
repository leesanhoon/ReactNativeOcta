import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

export default class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.contentLogo}>
        <Image
          style={styles.imageLogo}
          source={require('../assets/images/logo.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentLogo: {
    marginTop: 10,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageLogo: {
    height: 150,
    width: 350,
  },
});
