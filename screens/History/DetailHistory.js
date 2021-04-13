import React from 'react';
import DetailHistoryComponent from "../../components/DetailHistoryComponent";
import { Button, Text, View } from 'native-base';

export default class DetailHistory extends React.Component {
    constructor(props) {
        super(props);
        this.navigate = this.props.navigation.navigate.bind(this);
    }

    static navigationOptions = {
        title: 'Chi tiết giao dịch'
    };

    render() {
        const { params } = this.props.navigation.state;
        const transactionId = params ? params.transactionId : null;
        const transactionDetail = transactionDetails.filter(tran => tran.transactionId == transactionId);
        return (
            <>
                <DetailHistoryComponent transactionDetail={transactionDetail[0]} navigate={this.navigate} >
                </DetailHistoryComponent>
            </>
        );
    }
}

const transactionDetails = [{
    transactionId: 1,
    accountID: 123123,
    agentId: '65',
    agentName: 'Dai ly Dung',
    serviceName: 'Trả trước',
    serviceType: 'Topup',
    toAccount: '0989888999',
    price: '50000',
    processed: '49000',
    status: 0,
    transactionType: 'Mobile',
    createDate: new Date().toLocaleDateString(),
    updateDate: new Date().toString(),
    balance: 9889866666,

},
{
    transactionId: 2,
    accountID: 123123,
    agentId: '65',
    agentName: 'Dai ly Dung',
    serviceName: 'Trả trước',
    serviceType: 'Topup',
    toAccount: '0989888999',
    price: '50000',
    processed: '49000',
    transactionType: 'Viettel',
    status: 1,
    createDate: new Date().toLocaleDateString(),
    updateDate: new Date().toString(),
    balance: 9889866666,

}, {
    transactionId: 3,
    accountID: 123123,
    agentId: '65',
    agentName: 'Dai ly Dung',
    serviceName: 'Trả trước',
    serviceType: 'Topup',
    toAccount: '0989888999',
    price: '50000',
    processed: '49000',
    transactionType: 'Mobile',
    status: 2,
    createDate: new Date().toLocaleDateString(),
    updateDate: new Date().toString(),
    balance: 9889866666,

}, {
    transactionId: 4,
    accountID: 123123,
    agentId: '65',
    agentName: 'Dai ly Dung',
    serviceName: 'Trả trước',
    serviceType: 'Topup',
    toAccount: '0989888999',
    price: '50000',
    processed: '49000',
    transactionType: 'Mobile',
    status: 0,
    createDate: new Date().toLocaleDateString(),
    updateDate: new Date().toString(),
    balance: 9889866666,

},
{
    transactionId: 5,
    accountID: 123123,
    agentId: '65',
    agentName: 'Dai ly Dung',
    serviceName: 'Trả trước',
    serviceType: 'Topup',
    toAccount: '0989888999',
    price: '50000',
    processed: '49000',
    transactionType: 'Mobile',
    status: 1,
    createDate: new Date().toLocaleDateString(),
    updateDate: new Date().toString(),
    balance: 9889866666,

},
{
    transactionId: 6,
    accountID: 123123,
    agentId: '65',
    agentName: 'Dai ly Dung',
    serviceName: 'Trả trước',
    serviceType: 'Topup',
    toAccount: '0989888999',
    price: '50000',
    processed: '49000',
    transactionType: 'Mobile',
    status: 0,
    createDate: new Date().toLocaleDateString(),
    updateDate: new Date().toString(),
    balance: 9889866666,

}
]

