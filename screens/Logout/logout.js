//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Login from "../../screens/Login/Login";

// create a component

export default class Logout extends Component {
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };

  UNSAFE_componentWillMount() {
      _signOutAsync();
  }
  render() {
    return (
        <Login/>
    );
  }
}

