import React from 'react';
import {
  Container,
  Content,
  Body,
  Icon,
  Card,
  CardItem,
  View,
} from 'native-base';

import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';

import backgroundImage from '../../assets/images/backgroundHome.jpg';
import {ScrollView} from 'react-native-gesture-handler';

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      showMoney: true,
      money: '1.000.000.000',
    };
  }

  openScreen(screen, props) {
    this.props.navigation.navigate(screen, props);
  }

  showIcon() {
    if (this.state.showMoney) {
      return (
        <>
          <Text style={{color: '#B0B0B0', fontSize: 20}}>VND </Text>
          <Text style={{fontSize: 20}}>{this.state.money} </Text>
          <Icon style={styles.iconShowMoney} name="eye" />
        </>
      );
    } else {
      return (
        <>
          <Text style={{fontSize: 20}}>****** </Text>
          <Icon style={styles.iconShowMoney} name="eye-off" />
        </>
      );
    }
  }

  render() {
    return (
      <Container>
        <ImageBackground
          source={backgroundImage}
          style={{width: '100%', height: '100%'}}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="menu" style={styles.menustyle} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Agent')}>
            <Text style={styles.styleAgent}>
              95 <Text>-</Text> Hoàng Oanh
            </Text>
          </TouchableOpacity>
          <Content style={styles.contentStyle}>
            <View style={styles.contentTopStyle}>
              <View style={styles.cardItemTop}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/images/logo.png')}
                />
                <View style={styles.cardItemTopRight}>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({showMoney: !this.state.showMoney})
                    }
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    {this.showIcon()}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.cardItemBody}>
                <TouchableOpacity
                  style={styles.contentOption}
                  onPress={() => this.openScreen('Deposit')}>
                  <Icon
                    type="FontAwesome"
                    name="money"
                    style={styles.itemIcon}
                  />
                  <Text style={styles.textStyle}>Nạp tiền</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.contentOption}
                  onPress={() => this.openScreen('History')}>
                  <Icon
                    type="Ionicons"
                    name="md-time"
                    style={styles.itemIcon}
                  />
                  <Text style={styles.textStyle}>Lịch sử</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.contentOption}
                  onPress={() => this.openScreen('Employee')}>
                  <Icon type="Feather" name="users" style={styles.itemIcon} />
                  <Text style={styles.textStyle}>Nhân viên</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cardContentStyle}>
              <TouchableOpacity
                style={styles.contentOption}
                onPress={() => this.openScreen('PayCode')}>
                <Icon
                  style={styles.itemIcon}
                  type="FontAwesome"
                  name="credit-card"
                />
                <Text style={styles.textStyle}>Mua thẻ điện thoại</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.contentOption}
                onPress={() => this.openScreen('PayCode', {pageFocus: 1})}>
                <Icon
                  style={styles.itemIcon}
                  type="FontAwesome"
                  name="credit-card"
                />
                <Text style={styles.textStyle}>Mua thẻ game</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.contentOption}
                onPress={() => this.openScreen('PayCode', {pageFocus: 2})}>
                <Icon
                  style={styles.itemIcon}
                  type="FontAwesome"
                  name="credit-card"
                />
                <Text style={styles.textStyle}>Mua thẻ khác</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.contentOption}
                onPress={() => this.openScreen('Topup')}>
                <Icon
                  style={styles.itemIcon}
                  type="FontAwesome"
                  name="phone-square"
                />
                <Text style={styles.textStyle}>Nạp tiền điện thoại</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.contentBanner}>
                <View style={styles.contentImageBanner}>
                  <Image
                    style={styles.bannerStyle}
                    source={require('../../assets/images/banner1.png')}
                  />
                </View>
                <View style={styles.contentImageBanner}>
                  <Image
                    style={styles.bannerStyle}
                    source={require('../../assets/images/banner2.jpg')}
                  />
                </View>
                <View style={styles.contentImageBanner}>
                  <Image
                    style={styles.bannerStyle}
                    source={require('../../assets/images/banner3.jpg')}
                  />
                </View>
              </View>
            </ScrollView>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  menustyle: {
    color: 'white',
    fontSize: 45,
    marginTop: 10,
    marginLeft: 10,
  },
  cardItemBody: {
    flexDirection: 'row',
  },
  contentImageBanner: {
    borderWidth: 1,
    padding: 2,
    marginLeft: 5,
    borderRadius: 5,
  },
  contentBanner: {
    marginTop: 90,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  bannerStyle: {
    height: 100,
    width: 200,
    borderWidth: 1,
    resizeMode: 'stretch',
  },
  contentTopStyle: {
    backgroundColor: 'white',
    position: 'absolute',
    marginLeft: '5%',
    marginRight: '5%',
    zIndex: 2,
    padding: 15,
    width: '90%',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  cardContentStyle: {
    top: 80,
    zIndex: 1,
    height: 'auto',
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
    paddingTop: 100,
    borderRadius: 3,
  },
  styleAgent: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardItemTop: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  item: {
    margin: 1,
  },
  iconShowMoney: {
    fontSize: 15,
    color: 'green',
  },
  itemIcon: {
    fontSize: 40,
    color: 'green',
  },
  itemMoney: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  itemMoneyLeft: {
    alignItems: 'center',
  },
  itemMoneyRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  logoStyle: {
    width: 120,
    height: 50,
    marginLeft: 20,
  },
  contentStyle: {
    marginTop: 10,
  },
  bodyOption: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  infoOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageStyle: {
    width: 100,
    height: 45,
    resizeMode: 'stretch',
  },
  contentOption: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%',
    marginTop: 10,
  },
  textStyle: {
    textAlign: 'center',
  },
  cardItemTopRight: {
    flexDirection: 'row',
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
