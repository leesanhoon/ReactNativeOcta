import React from 'react';
import HistoryComponent from "../../components/HistoryComponent";
import { Button, Text, View } from 'native-base';

export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.navigate = this.props.navigation.navigate.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Lịch sử giao dịch'
        };
    };

    render() {
        return (
            <HistoryComponent transactions={transactions} navigate={this.navigate} ></HistoryComponent >
        );
    }
}

const transactions = [{
    transactionId: 1,
    transactionType: 'Thanh toán hoá đơn',
    createDate: new Date().toString(),
    status: 0,
},
{
    transactionId: 2,
    transactionType: 'Nạp tiền điện thoại',
    createDate: new Date().toString(),
    status: 1,
},
{
    transactionId: 3,
    transactionType: 'Nạp tiền điện thoại',
    createDate: new Date('2019/11/03').toString(),
    status: 2,
},
{
    transactionId: 4,
    transactionType: 'Nạp tiền điện thoại',
    createDate: new Date('2019/11/02').toString(),
    status: 0,
},
{
    transactionId: 5,
    transactionType: 'Nạp tiền',
    createDate: new Date('2019/11/01').toString(),
    status: 1,
},
{
    transactionId: 6,
    transactionType: 'Nạp tiền điện thoại',
    createDate: new Date().toString(),
    status: 0,
},
]

