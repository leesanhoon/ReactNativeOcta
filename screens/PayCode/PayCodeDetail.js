import React from 'react';
import { StyleSheet } from 'react-native'

import TransactionDetail from "../../components/Transaction/TransactionDetail";

export default class PayCodeDetail extends React.Component {

    constructor(props) {

        super(props);

        // Chuyen sang buoc cuoi mua the
        this.navigate = this.openScreen.bind(this, 'PayCodeFinal')

    }

    openScreen = (s) => {
        this.props.navigation.navigate(s);
    }

    static navigationOptions = {
        title: 'Thanh toán'
    };

    render() {
        return (
            <TransactionDetail navigate={this.navigate}></TransactionDetail>
        );
    }
}