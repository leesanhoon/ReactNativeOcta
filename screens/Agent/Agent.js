import React from 'react';
import {StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  View,
  Button,
} from 'native-base';

export default class Agent extends React.Component {
  static navigationOptions = {
    title: 'Thông tin'
  };

  AlertCancel() {
    Alert.alert(
      'Thông báo',
      'Bạn muốn hủy yêu cầu nạp tiền này ?',
      [
        {
          text: 'Đóng',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Hủy', onPress: () => Alert.alert(null, 'Hủy thành công')},
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem bordered style={{flexDirection: 'column'}}>
              <Text style={styles.title}>Thông tin đại lý</Text>
              <View style={styles.viewContent}>
                <Text style={styles.columnLeft}>Đại lý</Text>
                <Text style={styles.columnRight}>95 - Hoàng Oanh</Text>
              </View>
              <View style={styles.viewContent}>
                <Text style={styles.columnLeft}>Số dư</Text>
                <Text style={styles.columnRight}>
                  1.000.000.234 <Text>VNĐ</Text>
                </Text>
              </View>
              <View style={styles.viewContent}>
                <Text style={styles.columnLeft}>Địa chỉ</Text>
                <Text style={styles.columnRight}>
                  Số 5, Ngõ 4, Tổ 4, Hà Nội
                </Text>
              </View>
              <View style={styles.viewContent}>
                <Text style={styles.columnLeft}>Email</Text>
                <Text style={styles.columnRight}>octa-vn@gmail.com</Text>
              </View>
              <View style={styles.viewContent}>
                <Text style={styles.columnLeft}>Số điện thoại</Text>
                <Text style={styles.columnRight}>0321654789</Text>
              </View>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered style={{flexDirection: 'column'}}>
              <Text style={styles.title}>Thông tin tài khoản</Text>
              <View style={styles.viewContent}>
                <Text style={styles.columnLeft}>Tên tài khoản</Text>
                <Text style={styles.columnRight}>Admin</Text>
              </View>
              <View style={styles.viewContent}>
                <Text style={styles.columnLeft}>Địa chỉ</Text>
                <Text style={styles.columnRight}>Hồ Chí Minh</Text>
              </View>
              <View style={styles.viewContent}>
                <Text style={styles.columnLeft}>Email</Text>
                <Text style={styles.columnRight}>admin@gmail.com</Text>
              </View>
              <View style={styles.viewContent}>
                <Text style={styles.columnLeft}>Số điện thoại</Text>
                <Text style={styles.columnRight}>0312456879</Text>
              </View>
            </CardItem>
          </Card>
        </Content>

        <Button
          full
          rounded
          style={styles.buttonConfirm}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>TRỞ VỀ TRANG CHỦ</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
  viewContent: {
    flexDirection: 'row',
    marginTop: 10,
  },
  contentBottom: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  columnLeft: {
    fontWeight: 'bold',
    textAlign: 'right',
    flex: 2,
  },
  columnRight: {
    marginLeft: 10,
    textAlign: 'left',
    flex: 3,
  },
  buttonConfirm: {
    margin: 20,
    backgroundColor: '#1BDD98',
  },
});
