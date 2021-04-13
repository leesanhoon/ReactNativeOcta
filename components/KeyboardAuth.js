import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Text, View, Button, Icon} from 'native-base';

export default class KeyboardAuth extends React.Component {
  constructor(props) {
    super(props);
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1, -1, -1, -1, -1];

    this.state = {
      arr: this.random(arr),
      authCode: '',
      authCodeIndex: 0,
    };
  }

  static navigationOptions = {
    header: null,
  };

  random = arr => {
    let result = [];
    let arrTemp = [...arr];
    for (let i = 0; i < arr.length; i++) {
      let index = Math.floor(Math.random() * arrTemp.length);
      result.push(arrTemp[index]);
      arrTemp.splice(index, 1);
    }
    return result;
  };

  payment(item) {
    this.setState({authCode: item});
    this.props.navigate();
  }

  render() {
    let {authCodeIndex, authCode, arr} = this.state;
    return (
      <>
        <View>
          <Text
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              textAlign: 'center',
            }}>
            Vui lòng nhập ký tự thứ {authCodeIndex} trong mã bảo mật bạn được
            cung cấp
          </Text>
          <View style={styles.contentInput}>
            <TextInput
              maxLength={1}
              style={styles.input}
              value={authCode.toString()}
              editable={false}
            />
          </View>
        </View>
        <View style={styles.formGroupPrice}>
          {arr.map((item, key) => {
            if (item != -1) {
              return (
                <Button
                  bordered
                  dark
                  key={key}
                  style={styles.buttonPriceDefault}
                  onPress={() => this.payment(item)}>
                  <Text>{item}</Text>
                </Button>
              );
            } else {
              return (
                <Button
                  bordered
                  dark
                  key={key}
                  style={styles.buttonPriceDefault}>
                  <Icon
                    type="MaterialCommunityIcons"
                    style={{color: '#13B078'}}
                    name="clover"
                  />
                </Button>
              );
            }
          })}
          {/* <Button transparent
                        style={styles.buttonPriceDefault}
                    >
                        <Icon type="MaterialCommunityIcons" name="backspace-outline" />
                    </Button> */}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  formGroupPrice: {
    flex: 1,
    marginBottom: 20,
    marginTop: 40,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  formRadioButton: {
    marginRight: 10,
  },

  formLable: {
    flex: 1,
  },

  formLablePrice: {
    flex: 1,
    marginBottom: 10,
  },

  formItem: {
    flex: 1,
    flexDirection: 'row',
  },

  buttonPriceDefault: {
    width: '23%',
    margin: '1%',
    justifyContent: 'center',
  },

  contentInput: {
    alignItems: 'center',
  },

  input: {
    fontSize: 20,
    borderBottomWidth: 1,
    textAlign: 'center',
    color: 'black',
    padding: 1,
    fontWeight: 'bold',
  },
});
