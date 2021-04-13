import React from 'react';
import { BackHandler } from 'react-native'
import { Icon } from "native-base";
import TransactionDetailFinal from "../../components/Transaction/TransactionDetailFinal";

export default class TopupFinal extends React.Component {

    constructor(props) {

        super(props);
        // thanh cong tro ve man hinh topup
        this.navigate = this.openScreen.bind(this, 'Topup')

    }

    openScreen = (s) => {
        this.props.navigation.navigate(s);
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
    static navigationOptions = ({ navigation }) => ({
        title: 'Hoàn tất',
        headerLeft: () => (
            <Icon type='Ionicons'
                style={{ marginLeft: 20, color: 'white' }}
                name="arrow-back"
                onPress={() => navigation.navigate('Topup')} />
        ),
    });

    render() {
        return (
            <TransactionDetailFinal navigate={this.navigate} transactionType={1}></TransactionDetailFinal>
        );
    }
}

