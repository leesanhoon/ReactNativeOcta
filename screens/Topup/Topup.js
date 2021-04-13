import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Container, Icon, Content, Card, CardItem, Text, Body, View, Button, Item, Input } from "native-base";
import { connect } from 'react-redux'
import TopupTransaction from "../../src/model/Service";
import PriceComponent from "../../components/Transaction/PriceComponent";

//import Modal for different modal box
class Topup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemSelected: 1,
            transaction: new TopupTransaction(10000, 1),
            priceSelected: 10000,
            discount: 0.1,
            option: 'prepaid'
        }
        this.navigate = this.openScreen.bind(this, 'TopupDetail');
    }

    openScreen = (s) => {
        this.props.navigation.navigate(s);
    }

    validate = () => {
        let regexPhone = /^\d{10,11}$/;
        if (regexPhone.test(this.state.transaction.phone)) return false;
        return true;
    }

    static navigationOptions = () => {
        return {
            title: 'Nạp tiền điện thoại',
        };
    };

    onChanged(phone) {
        this.setState({
            transaction: {
                ...this.state.transaction,
                phone: phone.replace(/[^0-9]/g, '')
            },
        });
    }

    selectedPrice = (service) => {

        this.setState({
            transaction: {
                ...this.state.transaction,
                serviceID: service.serviceID,
                price: service.price
            },
        });

    }

    nextStep() {

        this.props.dispatch({
            type: 'SAVE',
            transaction: this.state.transaction
        });

        this.navigate();

    }

    choosePrice = (price, discount) => {
        this.setState({ priceSelected: price, discount: discount })
    }

    render() {
        let { transaction } = this.state;
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text style={{ flex: 1 }}>Nạp đến</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Item style={{ flex: 8, marginRight: 10 }}>
                                        <Input
                                            keyboardType='numeric'
                                            placeholder='0329 562 768'
                                            onChangeText={(phone) => this.onChanged(phone)}
                                            maxLength={12}
                                            value={transaction.phone}
                                        />
                                        <TouchableOpacity>
                                            <Icon type='AntDesign' name='contacts' />
                                        </TouchableOpacity>
                                    </Item>
                                    <View styles={{ borderWidth: 1, flex: 2, padding: 10, backgroundColor : 'red'}}>
                                        <Image
                                            style={styles.imgProvider}
                                            source={{ uri: 'https://mobiphonespec.com/wp-content/uploads/2019/04/Nhung-cach-lien-he-voi-tong-dai-Viettel-de-gap-truc-tiep-nhan-vien-tu-van-4.jpg' }}
                                        />
                                    </View>

                                </View>
                                <Text style={{ marginTop: 20 }}>Hình thức thuê bao</Text>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <TouchableOpacity
                                        style={this.state.option == 'prepaid' ? styles.optionActive : styles.optionPrepaid}
                                        onPress={() => this.setState({ option: 'prepaid' })}
                                    >
                                        <Text>Trả trước</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={this.state.option == 'postpaid' ? styles.optionActive : styles.optionPostpaid}
                                        onPress={() => this.setState({ option: 'postpaid' })}

                                    >
                                        <Text>Trả sau</Text>
                                    </TouchableOpacity>
                                    <View style={styles.formGroup}>
                                    </View>
                                </View>
                                <Text style={{ marginTop: 10 }}>Nhập số tiền</Text>
                                <Item>
                                    <Input keyboardType='numeric' />
                                    <Text>VND</Text>
                                </Item>
                                <Text style={{ marginTop: 10 }}>Hoặc chọn mệnh giá</Text>

                                <View style={styles.formGroupPrice}>
                                    {prices.map(({ price, discount }) => {
                                        return (
                                            <View style={styles.buttonPriceDefault} key={price}>
                                                <TouchableOpacity onPress={() => this.choosePrice(price, discount)}>
                                                    <PriceComponent price={price}
                                                        discount={discount}
                                                        active={this.state.priceSelected == price ? true : false}
                                                    >
                                                    </PriceComponent>
                                                </TouchableOpacity>
                                            </View>)
                                    })}
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <Button full rounded
                    style={this.validate() ? styles.buttonDisabled : styles.buttonConfirm}
                    onPress={() => this.nextStep()}
                    disabled={this.validate()}
                >
                    <Text>TIẾP TỤC</Text>
                </Button>
            </Container>
        );
    }
}

export default connect()(Topup)

const styles = StyleSheet.create({

    formGroupPrice: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    formGroup: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    buttonConfirm: {
        margin: 20,
        backgroundColor: '#13B078'
    },

    buttonDisabled: {
        margin: 20,
        backgroundColor: 'gray'
    },

    buttonPriceDefault: {
        width: '30%',
        marginTop: 10,
        justifyContent: 'center',
    },

    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgProvider: {
        marginRight: 5,
        width: 50,
        height: 50,
        resizeMode: 'stretch'
    },
    optionPrepaid: {
        borderWidth: 2,
        padding: 5,
        borderRightWidth: 0
    },
    optionPostpaid: {
        borderWidth: 2,
        padding: 5,
        borderLeftWidth: 0
    },
    optionActive: {
        borderColor: '#009E0F',
        borderWidth: 2,
        padding: 5,
    },
});

const prices = [
    {
        price: '10000',
        discount: 0.05
    },
    {
        price: '20000',
        discount: 0.05
    },
    {
        price: '50000',
        discount: 0.05
    },
    {
        price: '100000',
        discount: 0.05
    },
    {
        price: '200000',
        discount: 0.05
    },
    {
        price: '500000',
        discount: 0.05
    }
]