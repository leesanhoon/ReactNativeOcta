import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body, View, Button } from "native-base";
import UserComponent from "../../components/UserComponent";
import config from "../../src/config/screenConfig";

export default class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.navigateHome = this.openScreen.bind(this, config.Home);
    }

    static navigationOptions = {
        title: 'Nhân viên'
    };

    openScreen(s) {
        this.props.navigation.navigate(s);
    }

    render() {
        return (
            <UserComponent employees={employees} navigateHome={this.navigateHome}></UserComponent >
        );
    }
}

const styles = StyleSheet.create({

});

const employees = [{
    id : 1,
    username: 'Dung Nguyen',
    isActive: true,
    address: '20 Nguyễn Thiện Thuật, Tp HCM',
    phoneNumber: '0901330330'
},
{
    id : 2,
    username: 'OanhPhan',
    isActive: false,
    address: '160/25/27F Bùi Đình Tuý, Phường 25, Quận Bình Thạnh, Tp Hồ Chí Minh',
    phoneNumber: '0708736377'
},
{
    id : 3,
    username: 'MiMi1',
    isActive: true,
    address: '25 Yên Phụ, Quận Cầu Giấy. Hà Nội',
    phoneNumber: '0901873874'
},
{
    id : 4,
    username: 'Giangnt',
    isActive: false,
    address: '1 Đồng Khởi, Phường Bến Nghé, Tp Hồ Chí Minh',
    phoneNumber: '0301873873'
},
{
    id : 5,
    username: 'Nhungkd',
    isActive: true,
    address: '70d, đường 185, phường Phước Long B, Quận9',
    phoneNumber: '0901234546'
},
]

