import React from 'react';
import {StyleSheet, TouchableOpacity, Clipboard} from 'react-native';
import {
  Toast,
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  View,
  Button,
  Icon,
  Badge,
} from 'native-base';
import Modal from 'react-native-modalbox';
import {connect} from 'react-redux';

class TransactionDetailFinal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      card: {
        code: null,
        serial: null,
      },
    };
  }

  static navigationOptions = () => ({
    title: 'Hoàn tất',
    headerLeft: () => (
      <Icon
        type="Ionicons"
        style={{marginLeft: 20, color: 'red'}}
        name="arrow-back"
        onPress={() => this.openTopup()}
      />
    ),
  });

  openTopup = () => {
    this.props.navigate();
  };

  copyCard = () => {
    Clipboard.setString(JSON.stringify(this.state.card));
    this.refs.modal3.close();

    Toast.show({
      text: 'Sao chép mã thành công!',
      buttonText: 'Đóng',
      position: 'bottom',
    });
  };

  openModal = card => {
    this.setState({card: card});
    this.refs.modal3.open();
  };

  renderPayCode = () => {
    return (
      <>
        <Container style={styles.container}>
          <Content padder>
            <Text style={styles.formHeader}>Chi tiết giao dịch</Text>
            <Card>
              <CardItem>
                <Body>
                  <View style={styles.formGroup}>
                    <Text style={styles.formLable}>Nhà cung cấp</Text>
                    <Text style={styles.formInput}>Viettel</Text>
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.formLable}>Mệnh giá</Text>
                    <Text style={styles.formInput}>10.000</Text>
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.formLable}>Giá bán</Text>
                    <Text style={styles.formInput}>10.000</Text>
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.formLable}>Số lượng</Text>
                    <Text style={styles.formInput}>2</Text>
                  </View>
                </Body>
              </CardItem>
              <CardItem footer bordered>
                <View style={styles.formGroup}>
                  <Text style={styles.formLable}>Thành tiền</Text>
                  {/* <Text style={(styles.formInput, {fontWeight: 'bold'})}>
                    {transaction.price}
                    <Text>đ</Text>
                  </Text> */}
                  <Text style={(styles.formInput, {fontWeight: 'bold'})}>
                    20.000
                    <Text>đ</Text>
                  </Text>
                </View>
              </CardItem>
            </Card>

            <Text style={styles.formHeader}>Danh sách thẻ</Text>
            <Card>
              {cards.map((card, key) => {
                return (
                  <TouchableOpacity
                    onPress={() => this.openModal(card)}
                    key={key}>
                    <CardItem>
                      <Badge
                        success
                        style={{position: 'absolute', margin: 5, zIndex: 2}}>
                        <Text>{key + 1}</Text>
                      </Badge>
                      <Body>
                        <View
                          style={{
                            zIndex: 1,
                            flex: 1,
                            flexDirection: 'column',
                            width: '100%',
                            borderWidth: 1,
                          }}>
                          <View style={{marginLeft: 20}}>
                            <Text>Mã thẻ</Text>
                            <Text style={{fontSize: 20, color: '#009D0D'}}>
                              {card.code}
                            </Text>
                          </View>
                          <View
                            style={{
                              flex: 1,
                              flexDirection: 'row',
                              justifyContent: 'flex-start',
                              borderTopWidth: 1,
                            }}>
                            <View
                              style={{
                                flex: 1,
                                marginLeft: 20,
                                borderRightWidth: 1,
                              }}>
                              <Text>Số seri</Text>
                              <Text>{card.serial}</Text>
                            </View>
                            <View style={{flex: 1, marginLeft: 20}}>
                              <Text>Ngày hết hạn</Text>
                              <Text>{card.expiredDate}</Text>
                            </View>
                          </View>
                        </View>
                      </Body>
                    </CardItem>
                  </TouchableOpacity>
                );
              })}
            </Card>
            <Button
              full
              rounded
              style={styles.buttonConfirm}
              onPress={() => this.openTopup()}>
              <Text>GIAO DỊCH MỚI</Text>
            </Button>
          </Content>
        </Container>
        <Modal
          style={[styles.modal, styles.modal4]}
          position={'bottom'}
          ref={'modal3'}>
          <TouchableOpacity
            style={{flex: 1, width: '100%'}}
            onPress={() => this.copyCard()}>
            <Text style={[styles.textModal, styles.textModalColor]}>
              Sao chép thông tin
            </Text>
          </TouchableOpacity>
          <Text style={styles.textModal}>
            {`Mã nạp : ${this.state.card.code}`}{' '}
          </Text>
          <Text
            style={styles.textModal}>{`Seri: ${this.state.card.serial}`}</Text>
          <TouchableOpacity
            style={{flex: 1, width: '100%'}}
            onPress={() => this.refs.modal3.close()}>
            <Text style={[styles.textModal, styles.textModalColor]}>Đóng</Text>
          </TouchableOpacity>
        </Modal>
      </>
    );
  };

  renderTopup = () => {
    let {transaction} = this.props;

    return (
      <Container style={styles.container}>
        <Content padder>
          <Text style={styles.formHeader}>Chi tiết giao dịch</Text>
          <Card>
            <CardItem bordered>
              <Body>
                <View style={styles.formGroup}>
                  <Text style={styles.formLable}>Số điện thoại nhận</Text>
                  {/* <Text style={styles.formInput}>{transaction.phone}</Text> */}
                  <Text style={styles.formInput}>0123456789</Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.formLable}>Nhà mạng</Text>
                  <Text style={styles.formInput}>
                    {transaction.providerName}
                  </Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.formLable}>Dịch vụ</Text>
                  <Text style={styles.formInput}>Viettel trả trước</Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.formLable}>Số tiền</Text>
                  {/* <Text style={styles.formInput}>{transaction.price}đ</Text> */}
                  <Text style={styles.formInput}>20.000đ</Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.formLable}>Giá bán</Text>
                  {/* <Text style={styles.formInput}>{transaction.price}đ</Text> */}
                  <Text style={styles.formInput}>20.000đ</Text>
                </View>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <View style={styles.formGroup}>
                <Text style={styles.formLable}>Thành tiền</Text>
                {/* <Text style={styles.formInputMoney}>{transaction.price}đ</Text> */}
                <Text style={styles.formInputMoney}>20.000đ</Text>
              </View>
            </CardItem>
          </Card>
        </Content>
        <Button
          full
          rounded
          style={styles.buttonConfirm}
          onPress={() => this.openTopup()}>
          <Text>GIAO DỊCH MỚI</Text>
        </Button>
      </Container>
    );
  };

  render() {
    if (this.props.transactionType == 2) {
      return this.renderPayCode();
    }
    if (this.props.transactionType == 1) {
      return this.renderTopup();
    }
  }
}

const mapStateToProps = state => ({transaction: state.transaction});

export default connect(mapStateToProps)(TransactionDetailFinal);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C3EBDD',
  },
  formGroup: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  formHeader: {
    fontSize: 20,
  },
  formLable: {
    flex: 1,
  },
  formInput: {
    flex: 1,
    textAlign: 'right',
  },
  formInputMoney: {
    flex: 1,
    textAlign: 'right',
    fontSize: 20,
  },
  buttonConfirm: {
    margin: 20,
    backgroundColor: '#13B078',
  },
  formCard: {
    width: '100%',
    borderWidth: 1,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal4: {
    height: '25%',
    width: '95%',
    bottom: 15,
  },
  textModal: {
    flex: 1,
    width: '100%',
    textAlign: 'center',
    borderTopWidth: 0.5,
    textAlignVertical: 'center',
  },
  textModalColor: {
    color: '#009D0D',
  },
});

const cards = [
  {
    code: '21848787989877978',
    serial: '100978989999999',
    expiredDate: '31/12/2014',
  },
  {
    code: '21848787989877979',
    serial: '1009789898977777',
    expiredDate: '31/12/2014',
  },
  {
    code: '21848787989877910',
    serial: '100978988888888',
    expiredDate: '31/12/2014',
  },
];
