import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Container, Button, Content, Card, CardItem, Text, Body, View, Icon } from "native-base";

export default class UserComponent extends React.Component {
    render() {
        const { navigateHome } = this.props;
        return (
            <Container style={styles.container}>
                <Content>
                    {this.props.employees.map(({ username, isActive, address, phoneNumber }, key = employee.id) => {
                        return (
                            <TouchableOpacity key={key}>
                                <View style={styles.cardItem} >
                                    <View style={styles.cardHeader}>
                                        <Text style={styles.textHeader}>{username}</Text>
                                    </View>

                                    <View style={styles.cardBody}>
                                        <View style={styles.cardBodyImg}>
                                            <Icon type='FontAwesome' name='user' style={isActive ? styles.iconUserOn : styles.iconUserOff}></Icon>
                                        </View>
                                        <View style={styles.cardBodyDetail}>
                                            <Text style={styles.textBody}>{address}</Text>
                                            <Text style={[styles.textBody, {marginTop : 5}]}>{phoneNumber}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                    <Button full rounded style={styles.buttonConfirm} onPress={navigateHome} >
                        <Text>TRỞ VỀ TRANG CHỦ</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE'
    },
    cardHeader: {
        backgroundColor: '#FFE599',
        borderColor: 'black',
        padding : 5,
    },
    cardBody: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        padding : 10,
        borderTopWidth : 1
    },
    textHeader: {
        color: 'black',
        fontWeight: 'bold',
        fontSize : 16
    },
    textBody: {
        fontSize : 14
    },
    cardItem: {
        padding : 1,
        margin: 5,
        borderWidth: 1,
        borderRadius: 5
    },
    cardBodyImg: {
        flex: 2,
        borderStyle: 'dashed',
        borderWidth: 1,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#AFAFAF'
    },
    cardBodyDetail: {
        marginLeft: 20,
        flex: 8
    },
    iconUserOff: {
        fontSize: 45,
        color: 'grey'
    },
    iconUserOn: {
        fontSize: 45,
        color: '#13B078'
    },
    buttonConfirm: {
        margin: 20,
        backgroundColor: '#13B078'
    },
});
