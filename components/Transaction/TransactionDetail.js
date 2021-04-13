import React from 'react';
import { StyleSheet } from 'react-native'
import { Container, Content, Card, CardItem, Text, Body, View, Button } from "native-base";

import KeyboardAuth from "../KeyboardAuth";
import Modal from 'react-native-modalbox';

export default class TransactionDetail extends React.Component {

    static navigationOptions = {
        title: 'Thanh toán'
    };

    render() {

        return (
            <>
                <Container>
                    <Content padder>
                        <Text>Chi tiết giao dịch</Text>
                        <Card>
                            <CardItem bordered>
                                <Body>
                                    <View style={styles.formGroup}>
                                        <Text style={styles.formLable}>Số điện thoại nhận</Text>
                                        {/* <Text style={styles.formInput}>{transaction.phone}</Text> */}
                                        <Text style={styles.formInput}>0348795401</Text>
                                    </View>
                                    <View style={styles.formGroup}>
                                        <Text style={styles.formLable}>Nhà mạng</Text>
                                        {/* <Text style={styles.formInput}>{transaction.providerName}</Text> */}
                                        <Text style={styles.formInput}>Viettel</Text>
                                    </View>
                                    <View style={styles.formGroup}>
                                        <Text style={styles.formLable}>Dịch vụ</Text>
                                        <Text style={styles.formInput}>Viettel trả trước</Text>
                                    </View>
                                    <View style={styles.formGroup}>
                                        <Text style={styles.formLable}>Số tiền</Text>
                                        {/* <Text style={styles.formInput}>{transaction.price}</Text> */}
                                        <Text style={styles.formInput}>10.000</Text>
                                    </View>
                                    <View style={styles.formGroup}>
                                        <Text style={styles.formLable}>Giá bán</Text>
                                        {/* <Text style={styles.formInput}>{transaction.price}</Text> */}
                                        <Text style={styles.formInput}>10.000</Text>
                                    </View>
                                </Body>
                            </CardItem>
                            <CardItem footer bordered>
                                <View style={styles.formGroup}>
                                    <Text style={styles.formLable}>Thành tiền</Text>
                                    {/* <Text style={styles.formInput,{fontWeight: 'bold'}}>{transaction.price}<Text>đ</Text></Text> */}
                                    <Text style={styles.formInput,{fontWeight: 'bold'}}>20.000<Text>đ</Text></Text>
                                </View>
                            </CardItem>
                        </Card>
                    </Content>
                    <Button full rounded
                        style={styles.buttonConfirm}
                        onPress={() => this.refs.modal4.open()}  >
                        <Text>XÁC NHẬN</Text>
                    </Button>
                </Container>

                {/*Bottom Modal*/}
                <Modal
                    style={[styles.modal, styles.modal4]}
                    position={'bottom'}
                    ref={'modal4'}>
                    <KeyboardAuth navigate={this.props.navigate}></KeyboardAuth>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state) => (
    { transaction: state.transaction }
)

const styles = StyleSheet.create({
    formGroup: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        alignItems: "center"
    },

    formLable: {
        flex: 1
    },
    formInput: {
        flex: 1,
        textAlign: 'right'
    },
    buttonConfirm: {
        margin: 20,
        backgroundColor: '#13B078'
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal4: {
        height: 350,
    },

});
