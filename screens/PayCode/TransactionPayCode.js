import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Container, Content, Card, CardItem, Text, Body, View, Button, Icon, Radio } from "native-base";
import PriceComponent from "../../components/Transaction/PriceComponent";
import TemplateComponent from "../../components/Transaction/TemplateComponent";
import ProviderComponent from "../../components/Transaction/ProviderComponent";
import config from "../../src/config/screenConfig";
import utils from '../../src/helper/utils';

export default class TransactionPayCode extends React.Component {

    constructor() {
        super();
        this.state = {
            providerSelected: null,
            priceSelected: 0,
            countNumber: 1,
            discount: 0
        }

    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Nạp tiền điện thoại'
        };
    };

    openScreen = (s) => {
        this.props.navigation.navigate(s);
    }

    plusCountNumber = () => {
        this.setState({ countNumber: this.state.countNumber + 1 })
    }

    minusCountNumber = () => {
        if (this.state.countNumber > 1)
            this.setState({ countNumber: this.state.countNumber - 1 })
    }

    choosePrice = (price, discount) => {
        this.setState({ priceSelected: price, discount: discount })
    }

    chooseProvider = (provider) => {
        this.setState({ providerSelected: provider })
    }

    renderButtonSubmit = () => {
        const { priceSelected,
            providerSelected,
            countNumber,
            discount } = this.state;

        const processed = priceSelected - discount * priceSelected;
        if (priceSelected != 0 && providerSelected != 0) {
            return (<TouchableOpacity
                style={styles.buttonConfirm}
                onPress={() => navigatePayCodeDetail()}
            >
                <Text style={styles.textButtonConfirm}>Tiếp tục</Text>
                <Text style={styles.textButtonConfirm}>{countNumber} thẻ</Text>
                <Text style={styles.textButtonConfirm}>{utils.formatNumber(processed)}đ</Text>
            </TouchableOpacity>)
        } else {
            return (<TouchableOpacity
                style={styles.buttonConfirm}
                onPress={() => navigatePayCodeDetail()}
            >
                <Text style={styles.textButtonConfirm}>Tiếp tục</Text>
            </TouchableOpacity>)
        }
    }

    render() {
        const { navigatePayCodeDetail } = this.props;
        const {providerSelected, priceSelected, countNumber} = this.state;
        return (
            <Container style={styles.container}>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text style={styles.formLablePrice}>Mua nhanh</Text>
                                <TemplateComponent
                                    templates={templates}
                                    navigatePayCodeDetail={navigatePayCodeDetail}
                                >
                                </TemplateComponent>
                                <Text style={styles.formLablePrice}>Chọn nhà mạng</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <ProviderComponent
                                        providers={providers}
                                        chooseProvider={this.chooseProvider}
                                        providerSelected={providerSelected}
                                    >
                                    </ProviderComponent>
                                </View>
                                <Text style={styles.formLablePrice}>Mệnh giá nạp</Text>
                                <View style={styles.formGroupPrice}>
                                    {prices.map(({ price, discount }) => {
                                        return (
                                            <View style={styles.buttonPriceDefault} key={price}>
                                                <TouchableOpacity onPress={() => this.choosePrice(price, discount)}>
                                                    <PriceComponent price={price}
                                                        discount={discount}
                                                        active={priceSelected == price ? true : false}
                                                    >
                                                    </PriceComponent>
                                                </TouchableOpacity>
                                            </View>)
                                    })}
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={styles.formLablePrice}>Chọn số lượng mua</Text>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Button small transparent large
                                        onPress={() => this.minusCountNumber()}
                                    >
                                        <Icon type='FontAwesome' name='minus-circle' style={countNumber > 1 ? styles.IconCount : styles.disabled} />
                                    </Button>
                                    <Text>{countNumber}</Text>
                                    <Button small transparent large
                                        onPress={() => this.plusCountNumber()}
                                    >
                                        <Icon type='FontAwesome' name='plus-circle' style={styles.IconCount} />
                                    </Button>

                                </View>
                            </View>
                        </CardItem>
                    </Card>
                </Content >
                {this.renderButtonSubmit()}
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    formGroupPrice: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        flexWrap: 'wrap',
        marginLeft: -5
    },

    formGroup: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10
    },

    formRadioButton: {
        marginRight: 10
    },

    formLable: {
        flex: 1
    },

    formLablePrice: {
        flex: 1,
        marginTop: 10,
        marginBottom: 5
    },

    formItem: {
        flex: 1,
        flexDirection: 'row'
    },

    formInput: {
        flex: 1,
        textAlign: 'right'
    },

    buttonConfirm: {
        margin: 20,
        backgroundColor: '#15C185',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    textButtonConfirm: {
        color: 'white',
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold'
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
        backgroundColor: '#009E0F'
    },

    IconCount: {
        color: '#009E0F',
        fontSize: 30
    },

    disabled: {
        color: 'grey',
        fontSize: 30
    }

});


const providers = [
    {
        code: 'VT',
        img: 'data:image/png;base64,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'
    },
    {
        code: 'MB',
        img: 'https://salt.tikicdn.com/media/brands/Brands-3780.jpg'
    },
    {
        code: 'VN',
        img: 'https://bachlongmobile.com/bnews/wp-content/uploads/2019/08/2-min-12.png'
    },
    {
        code: 'VNM',
        img: 'https://upload.wikimedia.org/wikipedia/vi/thumb/a/a8/Vietnamobile_Logo.svg/1200px-Vietnamobile_Logo.svg.png'
    },
]

const templates = [
    {
        id: '1',
        providerName: 'Viettel',
        img: 'data:image/png;base64,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',
        price: 10000,
        createDate: '30/10/2019 - 11 : 10'
    },
    {
        id: '2',
        providerName: 'Mobiphone',
        img: 'https://salt.tikicdn.com/media/brands/Brands-3780.jpg',
        price: 20000,
        createDate: '30/10/2019 - 11 : 10'
    },

]

const prices = [
    {
        price: '10000',
        discount: 0.1
    },
    {
        price: '20000',
        discount: 0.1
    },
    {
        price: '50000',
        discount: 0.1
    },
    {
        price: '100000',
        discount: 0.1
    },
    {
        price: '200000',
        discount: 0.1
    },
    {
        price: '500000',
        discount: 0.1
    }
]