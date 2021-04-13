import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Tab, Tabs, Button, Icon, Text } from 'native-base';
import TransactionPayCode from './TransactionPayCode';

export default class PayCode extends Component {

    constructor(props) {
        super(props);
        this.state = { initialPage: this.getPageInit() }
        this.navigatePayCodeDetail = this.openScreen.bind(this, 'PayCodeDetail');
    }

    static navigationOptions = {
        title: 'Mua thẻ'
    };

    getPageInit = () => {
        const { routeName, params } = this.props.navigation.state;
        let pageFocus = params ? params.pageFocus : null;
        if (pageFocus) {
            return pageFocus;
        }
        else {
            switch (routeName) {
                case 'PayCode':
                    return 0;
                case 'PayCodeGame':
                    return 1;
                case 'PayCodeOther':
                    return 2;
                default:
                    return 0;
            }
        }

    }

    openScreen(s) {
        this.props.navigation.navigate(s);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Tabs locked={true} initialPage={this.state.initialPage} padder tabBarUnderlineStyle={{ backgroundColor: '#B6D7A8' }}>
                    <Tab heading="Điện thoại"
                        tabStyle={styles.tabStyle}
                        textStyle={{ color: '#979897' }}
                        activeTabStyle={styles.activeTabStyle}
                        activeTextStyle={{ color: 'black' }}
                    >
                        <TransactionPayCode navigatePayCodeDetail={this.navigatePayCodeDetail} />
                    </Tab>
                    <Tab heading="Game"
                        tabStyle={styles.tabStyle}
                        textStyle={{ color: '#979897' }}
                        activeTabStyle={styles.activeTabStyle}
                        activeTextStyle={{ color: 'black' }}
                    >
                        <TransactionPayCode navigatePayCodeDetail={this.navigatePayCodeDetail} />
                    </Tab>
                    <Tab heading="Thẻ khác"
                        tabStyle={styles.tabStyle}
                        textStyle={{ color: '#979897' }}
                        activeTabStyle={styles.activeTabStyle}
                        activeTextStyle={{ color: 'black' }}
                    >
                        <TransactionPayCode navigatePayCodeDetail={this.navigatePayCodeDetail} />
                    </Tab>
                </Tabs>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    tabStyle: {
        backgroundColor: 'white'
    },
    activeTabStyle: {
        backgroundColor: 'white'
    },
    buttonConfirm: {
        margin: 20,
        backgroundColor: '#13B078'
    },

    disabled: {
        color: 'grey',
        fontSize: 30
    }

});