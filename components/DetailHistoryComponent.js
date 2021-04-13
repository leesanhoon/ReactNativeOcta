import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Badge,
  Text,
  Body,
  View,
  Button,
} from 'native-base';
import moment from 'moment';
import utils from "../src/helper/utils";

export default class DetailHistoryComponent extends React.Component {
  static navigationOptions = {
    title: 'Thanh toán',
  };

  getStatusView = (status) => {
    switch (status) {
      case 0:
        return <Text style={styles.typeFail}>Thất bại</Text>;
      case 1:
        return <Text style={styles.typeSuccess}>Thành công</Text>;
      default:
        return <Text style={styles.typeProcessing}>Đang xử lý</Text>;
    }
  }

  render() {
    const {
      accountID,
      transactionId,
      agentId,
      agentName,
      serviceName,
      serviceType,
      toAccount,
      price,
      processed,
      transactionType,
      status,
      createDate,
      updateDate,
      balance,
    } = this.props.transactionDetail;

    return (
      <Container style={styles.container}>
        <Content padder>
          <Text style={styles.cardTitle}>Thông tin đại lý</Text>
          <View style={styles.styleCard}>
            <View style={styles.formGroup}>
              <Text style={styles.formLable}>ID tài khoản</Text>
              <Text style={styles.formInput}>{accountID}</Text>
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.formLable}>Đại lý thực hiện</Text>
              <Text style={styles.formInput}>
                {agentId}-{agentName}
              </Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>Dịch vụ</Text>
          <View style={styles.styleCard}>
            <View style={styles.formGroup}>
              <Text style={styles.formLable}>Dịch vụ</Text>
              <Text style={styles.formInput}>{serviceName}</Text>
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.formLable}>Loại dịch vụ</Text>
              <Text style={styles.formInput}>{serviceType}</Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>Giao dịch</Text>
          <View style={styles.styleCard}>
            <View style={styles.formGroup}>
              <Text style={styles.formLable}>Mã giao dịch</Text>
              <Text style={styles.formInput}>{transactionId}</Text>
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.formLable}>Loại giao dịch</Text>
              <Text style={styles.formInput}>{transactionType}</Text>
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.formLable}>Tài khoản nhận</Text>
              <Text style={styles.formInput}>{toAccount}</Text>
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.formLable}>Mệnh giá</Text>
              <Text style={styles.formInput}>{utils.formatNumber(price)}</Text>
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.formLable}>Thành tiền</Text>
              <Text style={styles.formInput}>{utils.formatNumber(processed)}</Text>
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.formLable}>Thanh toán</Text>
              <Text style={styles.formInput}>{utils.formatNumber(processed)}</Text>
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.formLable}>Trạng thái giao dịch</Text>
              <Text style={styles.formInput}>{this.getStatusView(status)}</Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>Thời gian</Text>
          <View style={styles.styleCard}>
            <View style={styles.formGroup}>
              <Text style={styles.formLable}>Thực hiện</Text>
              <Text style={styles.formInput}>
                {moment(createDate).format('YYYY-MM-DD hh:mm:ss')}
              </Text>
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.formLable}>Tiếp nhận</Text>
              <Text style={styles.formInput}>
                {moment(createDate).format('YYYY-MM-DD hh:mm:ss')}
              </Text>
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.formLable}>Cập nhật</Text>
              <Text style={styles.formInput}>
                {moment(updateDate).format('YYYY-MM-DD hh:mm:ss')}
              </Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>Số dư</Text>
          <View style={styles.balanceTitle}>
            <View style={styles.balanceLeft}>
              <Text style={styles.balanceTime}>Thời gian</Text>
              <Text style={{ flex: 1, textAlign: 'center' }}>Thanh toán</Text>
            </View>
            <Text style={styles.balanceRight}>Số dư</Text>
          </View>

          <View style={styles.balanceContent}>
            <View style={styles.balanceLeft}>
              <Text style={styles.balanceTime}>
                2019-10-01 <Text>18:11:01</Text>
              </Text>
              <View style={styles.payContent}>
                <Text style={styles.payTextMinus}>- {utils.formatNumber(processed)}</Text>
              </View>
            </View>
            <Text style={styles.balanceRight}>{utils.formatNumber(balance - processed)}</Text>
          </View>
          {status == 0 ? (<View style={[styles.balanceContent, { borderTopWidth: 0 },]}>
            <View style={styles.balanceLeft}>
              <Text style={styles.balanceTime}>
                2019-10-01 <Text>18:11:01</Text>
              </Text>
              <View style={styles.payContent}>
                <Text style={styles.payTextPlus}>+ {utils.formatNumber(processed)}</Text>
              </View>
            </View>
            <Text style={styles.balanceRight}>{utils.formatNumber(balance)}</Text>
          </View>)
            : null}

          <Button
            full
            rounded
            style={styles.buttonConfirm}
            onPress={() => this.props.navigate('Home')}>
            <Text>TRỞ VỀ TRANG CHỦ</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
  },
  formGroup: {
    flex: 1,
    flexDirection: 'row',
  },

  formLable: {
    flex: 1,
    marginTop: 5,
  },
  formInput: {
    flex: 1,
    textAlign: 'right',
  },
  buttonConfirm: {
    margin: 20,
    backgroundColor: '#13B078',
  },
  rowView: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    justifyContent: 'space-around',
  },
  columnView: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  balanceTitle: {
    backgroundColor: '#CCCCCC',
    flexDirection: 'row',
    borderWidth: 1,
  },
  balanceLeft: {
    borderRightWidth: 1,
    flexDirection: 'row',
    flex: 6,
  },
  balanceContent: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor : 'white'
  },
  payContent: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor : 'white'
  },
  balanceTime: {
    flex: 1,
    textAlign: 'center',
    borderRightWidth: 1
  },
  balanceRight: {
    flex: 4,
    textAlign: 'center',
  },
  payTextMinus: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'red',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  payTextPlus: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#009D0E',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  styleCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5,
  },
  cardTitle: {
    marginTop: 5,
  },
  typeSuccess: {
    color: '#53AC4E',
  },

  typeFail: {
    color: 'red',
  },

  typeProcessing: {
    color: '#FFAD30',
  },
});
