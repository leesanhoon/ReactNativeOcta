import React from 'react';
import { Icon, Root } from "native-base";
import { BackHandler } from 'react-native';

import TransactionDetailFinal from "../../components/Transaction/TransactionDetailFinal";

export default class PayCodeFinal extends React.Component {

    constructor(props) {

        super(props);
        // tro ve man hinh mua the
        this.navigate = this.openScreen.bind(this, 'PayCode')

    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        this.backHandler.remove()
    }

    handleBackPress = () => {
        this.navigate();
        return true;
    }

    openScreen = (s) => {
        this.props.navigation.navigate(s);
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Hoàn tất',
        headerLeft: () => (
            <Icon type='Ionicons'
                style={{ marginLeft: 20, color: 'white' }}
                name="arrow-back"
                onPress={() => navigation.navigate('PayCode')} />
        ),
    });

    render() {
        return (
            <Root>
                <TransactionDetailFinal navigate={this.navigate} transactionType={2}></TransactionDetailFinal>
            </Root>
        );
    }
}
