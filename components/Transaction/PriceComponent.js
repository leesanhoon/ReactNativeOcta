import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import utils from "../../src/helper/utils";

export class PriceComponent extends Component {

    constructor() {
        super();

    }

    render() {
        const { price, discount, active } = this.props;
        return (
            <View style={[styles.container, active ? styles.priceActive : null]}>
                <Text style={[styles.lablePrice, active ? styles.textActive : null]}>
                    {utils.formatNumber(price)}đ
                    </Text>
                <Text style={[styles.lableDiscount, active ? styles.textActive : null]}>
                    Giá bán : {utils.formatNumber(price - price * discount)}đ
                    </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    priceActive: {
        borderColor: '#009e0f',
        borderWidth: 1
    },
    textActive: {
        color: '#009e0f',
        borderColor: '#009e0f'
    },
    container: {
        borderWidth: 1,
        borderRadius: 5
    },
    lablePrice: {
        textAlign: "center",
        padding: 5
    },
    lableDiscount: {
        borderTopWidth: 1,
        fontSize: 11,
        padding: 2
    }
});

export default PriceComponent
