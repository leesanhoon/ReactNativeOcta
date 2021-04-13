import React from 'react';
import { StyleSheet } from 'react-native'

import TransactionDetail from "../../components/Transaction/TransactionDetail";

export default class TopupDetail extends React.Component {

    constructor(props) {

        super(props);
        // Chuyen qua man hinh giao dich cuoi
        this.navigate = this.openScreen.bind(this, 'TopupFinal')

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