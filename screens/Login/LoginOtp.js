import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Container, Content, Form, Button, Text} from 'native-base';

import LogoComponent from '../../components/LogoComponent';

export default class LoginOTP extends React.Component {
  changeText (ref){
    if(ref === '7'){
      this.props.navigation.navigate('Home');
      return ;
    }
    if(ref){
      this.refs[ref].focus()
    }
  }
  render() {
    return (
      <Container>
        <Content>
          <LogoComponent />
          <View style={styles.contentAlert}>
            <Text style={{fontSize: 20}}>Vui lòng nhập OTP</Text>
            <Text style={{fontSize: 20}}>OTP sẽ hết hạn trong vòng 10 phút</Text>
            <View style={styles.contentInput}>
              <TextInput
                autoFocus={true}
                keyboardType="numeric"
                ref="1"
                onChangeText={() =>this.changeText('2')}
                maxLength={1}
                style={styles.input}
              />
              <TextInput
                keyboardType="numeric"
                ref="2"
                onChangeText={() => this.changeText('3')}
                maxLength={1}
                style={styles.input}
              />
              <TextInput
                keyboardType="numeric"
                ref="3"
                onChangeText={() => this.changeText('4')}
                maxLength={1}
                style={styles.input}
              />
              <TextInput
                keyboardType="numeric"
                ref="4"
                onChangeText={() => this.changeText('5')}
                maxLength={1}
                style={styles.input}
              />
              <TextInput
                keyboardType="numeric"
                ref="5"
                onChangeText={() => this.changeText('6')}
                maxLength={1}
                style={styles.input}
              />
              <TextInput
                keyboardType="numeric"
                ref="6"
                onChangeText={() => this.changeText('7')}
                maxLength={1}
                style={styles.input}
              />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentAlert: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  contentInput: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
  },
  input: {
    margin: 20,
    textAlign: 'center',
    borderBottomWidth : 1,
    fontSize: 20
  },
});
