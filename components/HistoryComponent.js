import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  Container,
  Content,
  Text,
  View,
  Button,
} from 'native-base';
import moment from 'moment';

export default class HistoryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.groupTrans = this.groupDateTransaction(this.props.transactions);
  }

  openScreen = s => {
    this.props.navigation.navigate(s);
  };

  groupDateTransaction = transactions => {
    var now = new Date();
    let currentDate = now.toLocaleDateString();
    let yesterday = now;
    yesterday.setDate(yesterday.getDate() - 1);

    let result = new Object({
      today: [],
      yesterday: [],
      other: [],
    });

    transactions.forEach(tran => {
      let createDate = new Date(tran.createDate).toLocaleDateString();
      if (currentDate === createDate) {
        result.today.push(tran);
      } else {
        if (yesterday.toLocaleDateString() === createDate) {
          result.yesterday.push(tran);
        } else {
          result.other.push(tran);
        }
      }
    });

    return result;
  };

  getStatusView = status => {
    switch (status) {
      case 0:
        return <Text style={styles.typeFail}>Thất bại</Text>;
      case 1:
        return <Text style={styles.typeSuccess}>Thành công</Text>;
      default:
        return <Text style={styles.typeProcessing}>Đang xử lý</Text>;
    }
  };

  convertStringToDate(str) {
    return new Date(str);
  }

  render() {
    const renderToDay = () => {
      if (this.groupTrans.today.length > 0) {
        return (
          <View style={styles.viewItem}>
            <Text style={{color: '#707070', marginTop: 10, marginLeft: 10}}>
              HÔM NAY
            </Text>
            {this.groupTrans.today.map(
              (
                {transactionId, transactionType, createDate, status},
                key = transactionId,
              ) => {
                return (
                  <TouchableOpacity
                    key={key}
                    onPress={() =>
                      this.props.navigate('DetailHistory', {
                        transactionId: transactionId,
                      })
                    }>
                    <View style={styles.cardBody}>
                      <View style={styles.cardBodyDetail}>
                        <Text style={styles.headerText}>{transactionType}</Text>
                        <Text>
                          {moment(createDate).format('YYYY-MM-DD hh:mm:ss')}
                        </Text>
                        {this.getStatusView(status)}
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              },
            )}
          </View>
        );
      }
    };

    const renderYesterday = () => {
      if (this.groupTrans.yesterday.length > 0) {
        return (
          <View style={styles.viewItem}>
            <Text style={{color: '#707070', marginTop: 10, marginLeft: 10}}>
              HÔM QUA
            </Text>
            {this.groupTrans.yesterday.map(
              (
                {transactionId, transactionType, createDate, status},
                key = transactionId,
              ) => {
                return (
                  <TouchableOpacity
                    key={key}
                    onPress={() =>
                      this.props.navigate('DetailHistory', {
                        transactionId: transactionId,
                      })
                    }>
                    <View style={styles.cardBody}>
                      <View style={styles.cardBodyDetail}>
                        <Text style={styles.headerText}>{transactionType}</Text>
                        <Text>
                          {moment(createDate).format('YYYY-MM-DD hh:mm:ss')}
                        </Text>
                        {this.getStatusView(status)}
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              },
            )}
          </View>
        );
      }
    };

    const renderOther = () => {
      if (this.groupTrans.other.length > 0) {
        return (
          <View>
            {this.groupTrans.other.map(
              (
                {transactionId, transactionType, createDate, status},
                key = transactionId,
              ) => {
                return (
                  <View key={key} style={styles.viewItem}>
                    <Text
                      style={{color: '#707070', marginTop: 10, marginLeft: 10}}>
                      {this.convertStringToDate(
                        createDate,
                      ).toLocaleDateString()}
                    </Text>
                    <TouchableOpacity
                      onPress={this.openScreenDetail}
                      onPress={() =>
                        this.props.navigate('DetailHistory', {
                          transactionId: transactionId,
                        })
                      }>
                      <View style={styles.cardBody}>
                        <View style={styles.cardBodyDetail}>
                          <Text style={styles.headerText}>
                            {transactionType}
                          </Text>
                          <Text>
                            {moment(createDate).format('YYYY-MM-DD hh:mm:ss')}
                          </Text>
                          {this.getStatusView(status)}
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              },
            )}
          </View>
        );
      }
    };
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={{fontWeight: 'bold', marginTop: 10, marginLeft: 10}}>
            Tìm thấy {this.props.transactions.length}/{100} kết quả
          </Text>
          {renderToDay()}
          {renderYesterday()}
          {renderOther()}

          <Button full rounded style={styles.button}>
            <Text>LẤY THÊM GIAO DỊCH</Text>
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

  cardBody: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },

  headerText: {
    color: 'black',
    fontWeight: 'bold',
  },

  viewItem: {
    marginLeft: 5,
    marginRight: 5,
  },

  cardBodyDetail: {
    flex: 1,
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

  button: {
    margin: 20,
    backgroundColor: '#13B078',
  },
});
