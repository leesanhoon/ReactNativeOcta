import React from 'react';
import {StyleSheet, View, TouchableOpacity, Clipboard} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Icon,
  Toast,
} from 'native-base';
import AlertModal from '../../components/modal/AlertModal';

export default class DepositDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clipboardText: '',
      textInputText: '',
      accountNumber: '0271001027730',
      accountName: 'CÔNG TY CỔ PHẦN DỊCH VỤ TRỰC TUYẾN ỐC TA',
      bankBranch: 'Thành công',
      money: '10.000',
      transferContent: 'Nap octa 12456',
    };
  }

  static navigationOptions = {
    title: 'Xác nhận',
  };

  set_Text_Into_Clipboard = async value => {
    await Clipboard.setString(value);
    Toast.show({
      text: 'Đã sao chép',
      buttonText: 'Ok',
    });
  };

  render() {
    return (
      <>
        <Container>
          <Content padder>
            <Card>
              <CardItem bordered style={{flexDirection: 'column'}}>
                <Text style={styles.title}>Thông tin nạp tiền</Text>
                <View style={styles.viewContent}>
                  <Text style={styles.columnLeft}>Đại lý nhận</Text>
                  <Text style={styles.columnRight}>95 - Hoàng Oanh</Text>
                </View>
                <View style={styles.viewContent}>
                  <Text style={styles.columnLeft}>Hình thức</Text>
                  <Text style={styles.columnRight}>Chuyển khoản</Text>
                </View>
                <View style={styles.viewContent}>
                  <Text style={styles.columnLeft}>Ghi chú</Text>
                  <Text style={styles.columnRight}> </Text>
                </View>
              </CardItem>
            </Card>
            <Card>
              <CardItem bordered style={{flexDirection: 'column'}}>
                <Text style={styles.title}>Thông tin tài khoản</Text>
                <View style={styles.viewContent}>
                  <Text style={styles.columnLeft}>Số tài khoản</Text>
                  <Text style={styles.columnRight}>
                    {this.state.accountNumber}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.set_Text_Into_Clipboard(this.state.accountNumber)
                    }>
                    <Icon
                      style={styles.columnIcon}
                      name="content-copy"
                      type="MaterialIcons"
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.viewContent}>
                  <Text style={styles.columnLeft}>Tên chủ tài khoản</Text>
                  <Text style={styles.columnRight}>
                    {this.state.accountName}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.set_Text_Into_Clipboard(this.state.accountName)
                    }>
                    <Icon
                      style={styles.columnIcon}
                      name="content-copy"
                      type="MaterialIcons"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.viewContent}>
                  <Text style={styles.columnLeft}>Tên ngân hàng</Text>
                  <Text style={styles.columnRight}>
                    Ngân hàng TMCP Ngoại thương Việt Nam
                  </Text>
                  <Icon></Icon>
                </View>
                <View style={styles.viewContent}>
                  <Text style={styles.columnLeft}>Chi nhánh</Text>
                  <Text style={styles.columnRight}>
                    {this.state.bankBranch}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.set_Text_Into_Clipboard(this.state.bankBranch)
                    }>
                    <Icon
                      style={styles.columnIcon}
                      name="content-copy"
                      type="MaterialIcons"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.viewContent}>
                  <Text style={styles.columnLeft}>Số tiền</Text>
                  <View style={styles.columnRight}>
                    <Text>
                      {this.state.money}
                      <Text>VNĐ</Text>
                    </Text>
                    <Text>Mười nghìn đồng</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      this.set_Text_Into_Clipboard(this.state.money)
                    }>
                    <Icon
                      style={styles.columnIcon}
                      name="content-copy"
                      type="MaterialIcons"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.viewContent}>
                  <Text style={styles.columnLeft}>Ngày tạo</Text>
                  <Text style={styles.columnRight}> 2019-09-30 15:15:30</Text>
                  <Icon></Icon>
                </View>
                <View style={styles.viewContent}>
                  <Text style={styles.columnLeft}>Nội dung chuyển khoản</Text>
                  <Text style={styles.columnRight}>
                    {this.state.transferContent}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.set_Text_Into_Clipboard(this.state.transferContent)
                    }>
                    <Icon
                      style={styles.columnIcon}
                      name="content-copy"
                      type="MaterialIcons"
                    />
                  </TouchableOpacity>
                </View>
              </CardItem>
            </Card>
            <Card>
              <CardItem bordered style={{flexDirection: 'column'}}>
                <Text style={styles.title}>Lưu ý</Text>
                <Body>
                  <View style={styles.contentBottom}>
                    <Text>
                      1. Quý khách vui lòng ghi đúng
                      <Text style={{color: 'green'}}>
                        {' '}
                        Nội dung chuyển khoản
                      </Text>
                      <Text> ở trên</Text>
                    </Text>
                  </View>
                  <View style={styles.contentBottom}>
                    <Text>
                      2. Vui lòng chọn
                      <Text style={{color: 'red'}}>
                        {' '}
                        Người chuyển chịu phí{' '}
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.contentBottom}>
                    <Text>
                      3. Mã nạp tiền chỉ có hiệu lục trong ngày{' '}
                      <Text style={{color: 'red'}}>30/09/2019 23:23:59</Text>
                    </Text>
                  </View>
                </Body>
              </CardItem>
            </Card>
            <Button
              full
              rounded
              style={styles.buttonConfirm}
              onPress={() => this.refs.modalAlert.open()}>
              <Text>HỦY</Text>
            </Button>
          </Content>
        </Container>
        <AlertModal ref="modalAlert" />
      </>
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
    flex: 1,
  },
  columnRight: {
    marginLeft: 10,
    textAlign: 'left',
    flex: 1,
  },
  buttonConfirm: {
    margin: 20,
    backgroundColor: '#1BDD98',
  },
  columnIcon: {
    fontSize: 20,
  },
});
