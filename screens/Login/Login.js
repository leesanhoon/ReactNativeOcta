import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Content, Form, Input, Button, Text, Icon} from 'native-base';
import LogoComponent from '../../components/LogoComponent';

export default class Login extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <LogoComponent />
          <Form style={styles.formStyle}>
            <View style={styles.contentInput}>
              <Icon style={{width: 25}} type="FontAwesome" name="user" />
              <Input
                style={styles.inputStyle}
                placeholder="Tên đăng nhập"
                keyboardType="default"
              />
            </View>
            <View style={styles.contentInput}>
              <Icon style={{width: 25}} type="FontAwesome" name="key" />
              <Input
                style={styles.inputStyle}
                placeholder="Mật khẩu"
                keyboardType="default"
                secureTextEntry={true}
              />
            </View>
          </Form>
          <View style={styles.contentButton}>
            <Button
              large
              rounded
              style={styles.button}
              onPress={() => this.props.navigation.navigate('LoginOTP')}>
              <Text style={{fontSize: 26}}>ĐĂNG NHẬP</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  formStyle: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 30,
  },
  contentButton: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#18C185',
  },
  contentInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  inputStyle: {
    marginLeft: 15,
    flex: 1,
  },
});
