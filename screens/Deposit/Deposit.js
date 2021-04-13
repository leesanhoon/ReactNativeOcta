import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Item,
  View,
  Button,
  Left,
  Form,
  InputGroup,
  Input,
  Icon,
} from 'native-base';
import Modal from 'react-native-modalbox';


//Screen Dimention for list width used below
var screen = Dimensions.get('window');

//Danh sach ngan hang
var listBank = [
  {
    id: '1',
    name: 'Ngân hàng Quân Đội (MB, công ty)',
    images: {
      url: require('../../assets/images/mb.png'),
    },
  },
  {
    id: '2',
    name: 'Ngân hàng Nông Nghiệp và PTNT (Agribank, công ty)',
    images: {
      url: require('../../assets/images/agribank.png'),
    },
  },
  {
    id: '3',
    name: 'Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank, công ty)',
    images: {
      url: require('../../assets/images/vietcombank.png'),
    },
  },
  {
    id: '4',
    name: 'Ngân hàng TMCP Đầu tư và Phát triển VN (BIDV, công ty)',
    images: {
      url: require('../../assets/images/bidv.png'),
    },
  },
  {
    id: '5',
    name: 'Ngân hàng TMCP Kỹ thương Việt Nam (Techcombank, công ty)',
    images: {
      url: require('../../assets/images/techcombank.png'),
    },
  },
];

export default class Deposit extends React.Component {
  constructor() {
    super();
    this.state = {
      priceSelected: '',
      price: '',
      selectedBank: 'Chọn ngân hàng nhận',
      bankId: '',
    };
  }

  bankChoosed(bank) {
    if (bank.id === this.state.bankId) {
      return {color: 'green'};
    } else {
      return {color: 'green', opacity: 0};
    }
  }

  // Chon ngan hang
  selectBank(bank) {
    this.setState({selectedBank: bank.name, bankId: bank.id});
    this.refs.modalBottom.close();
  }

  //Chon so tien
  changePrice(price) {
    this.setState({priceSelected: price});
    this.setState({price: price});
  }

  //function to return List (To show on Modal)
  renderList() {
    //Đẩy danh sách ngân hàng vào mảng list
    var list = [];
    listBank.forEach(bank => {
      list.push(
        <TouchableOpacity key={bank.id} onPress={() => this.selectBank(bank)}>
          <View style={styles.bankList}>
            <View style={styles.itemBank}>
              <Image style={styles.imgLogoBank} source={bank.images.url} />
            </View>
            <Text style={{flex: 1, marginLeft: 10}}>{bank.name}</Text>
            <Icon style={this.bankChoosed(bank)} type="Entypo" name="check" />
          </View>
        </TouchableOpacity>,
      );
    });

    return list;
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Nạp tiền',
    };
  };

  render() {
    return (
      <>
        <Container>
          <Content padder style={{}}>
            <Card>
              <CardItem header style={{flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={{flex: 1, marginLeft: 5}}>Đại lý nhận</Text>
                  <Text style={{flex: 2, marginLeft: 15}}>95 - Hoàng Oanh</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                  <Text style={{flex: 1, marginLeft: 5}}>Hình thức</Text>
                  <Text style={{flex: 2, marginLeft: 15}}>Chuyển khoản</Text>
                </View>
              </CardItem>
              <CardItem>
                <Content>
                  <Form>
                    <Item>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                        }}
                        onPress={() => this.refs.modalBottom.open()}>
                        <Text style={{flex: 1}}>{this.state.selectedBank}</Text>
                        <Icon name="caretdown" type="AntDesign"></Icon>
                      </TouchableOpacity>
                    </Item>
                  </Form>
                </Content>
              </CardItem>
              <CardItem>
                <View style={{flex: 1}}>
                  <Content style={{flex: 1}}>
                    <InputGroup>
                      <Input
                        keyboardType="numeric"
                        value={this.state.price}
                        onChangeText={value => this.changePrice(value)}
                        placeholder="Nhập số tiền"></Input>
                     
                      <Text>VNĐ</Text>
                    </InputGroup>
                  </Content>
                </View>
              </CardItem>
              <CardItem footer style={{flex: 1, flexDirection: 'column'}}>
                <Left>
                  <Text style={styles.formLablePrice}>
                    Hoặc chọn nhanh số tiền
                  </Text>
                </Left>
                <View style={styles.formGroupPrice}>
                  <Button
                    bordered
                    dark
                    light={this.state.priceSelected == '100.000'}
                    style={
                      this.state.priceSelected == '100.000'
                        ? styles.buttonPriceSelected
                        : styles.buttonPriceDefault
                    }
                    onPress={() => this.changePrice('100.000')}>
                    <Text>100.000</Text>
                  </Button>
                  <Button
                    bordered
                    dark
                    light={this.state.priceSelected == '200.000'}
                    style={
                      this.state.priceSelected == '200.000'
                        ? styles.buttonPriceSelected
                        : styles.buttonPriceDefault
                    }
                    onPress={() => this.changePrice('200.000')}>
                    <Text>200.000</Text>
                  </Button>
                  <Button
                    bordered
                    dark
                    light={this.state.priceSelected == '500.000'}
                    style={
                      this.state.priceSelected == '500.000'
                        ? styles.buttonPriceSelected
                        : styles.buttonPriceDefault
                    }
                    onPress={() => this.changePrice('500.000')}>
                    <Text>500.000</Text>
                  </Button>
                  <Button
                    bordered
                    dark
                    light={this.state.priceSelected == '1.000.000'}
                    style={
                      this.state.priceSelected == '1.000.000'
                        ? styles.buttonPriceSelected
                        : styles.buttonPriceDefault
                    }
                    onPress={() => this.changePrice('1.000.000')}>
                    <Text>1.000.000</Text>
                  </Button>

                  <Button
                    bordered
                    dark
                    light={this.state.priceSelected == '2.000.000'}
                    style={
                      this.state.priceSelected == '2.000.000'
                        ? styles.buttonPriceSelected
                        : styles.buttonPriceDefault
                    }
                    onPress={() => this.changePrice('2.000.000')}>
                    <Text>2.000.000</Text>
                  </Button>
                  <Button
                    bordered
                    dark
                    light={this.state.priceSelected == '5.000.000'}
                    style={
                      this.state.priceSelected == '5.000.000'
                        ? styles.buttonPriceSelected
                        : styles.buttonPriceDefault
                    }
                    onPress={() => this.changePrice('5.000.000')}>
                    <Text>5.000.000</Text>
                  </Button>
                </View>
              </CardItem>
            </Card>
          </Content>
          <Button
            full
            rounded
            style={styles.buttonConfirm}
            onPress={() => this.props.navigation.navigate('DepositDetail')}>
            <Text>TIẾP TỤC</Text>
          </Button>
        </Container>

        {/* Modal Bottom */}
        <Modal
          style={[styles.modal, styles.modal4]}
          position={'bottom'}
          ref={'modalBottom'}
          swipeArea={20}>
          {/* Title */}
          <View
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
            }}>
            <View style={styles.modalTitle}>
              <TouchableOpacity onPress={() => this.refs.modalBottom.close()}>
                <Icon
                  style={{color: 'black', fontSize: 20}}
                  name="close"
                  type="FontAwesome"
                />
              </TouchableOpacity>
              <Text style={styles.modalTitleText}>Chọn ngân hàng nhận</Text>
            </View>
          </View>
          <ScrollView>
            <View style={{width: screen.width}}>{this.renderList()}</View>
          </ScrollView>
        </Modal>
      </>
    );
  }
}

const styles = StyleSheet.create({
  formGroupPrice: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    flexWrap: 'wrap',
  },

  formGroup: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
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

  formInput: {
    flex: 1,
    textAlign: 'right',
  },

  buttonConfirm: {
    margin: 20,
    backgroundColor: '#1BDD98',
  },

  buttonPriceDefault: {
    width: '30%',
    margin: 5,
    justifyContent: 'center',
  },

  buttonPriceSelected: {
    width: '30%',
    margin: 5,
    justifyContent: 'center',
    backgroundColor: '#009E0F',
  },
  modal4: {
    height: 300,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    flex: 1,
  },
  modalTitleText: {
    color: 'black',
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  imgLogoBank: {
    height: 27,
    width: 60,
    resizeMode: 'stretch',
  },
  itemBank: {
    borderWidth: 1,
    padding: 3,
    borderRadius: 5,
    justifyContent: 'center',
    marginLeft: 5,
  },
  bankList: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 4,
  },
});
