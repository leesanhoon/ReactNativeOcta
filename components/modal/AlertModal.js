import React, {Component} from 'react';
import {Text,View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modalbox';
import SuccessModal from "./SuccessModal";

export default class AlertModal extends Component {
  open() {
    this.refs.modalAlert.open();
  }
  OpenModal() {
    this.refs.modalAlert.close();
    this.refs.modalSuccess.open();
  }
  render() {
    return (
      <>
        {/* {modalAlert} */}
        <Modal style={styles.modalAlert} position={'center'} ref={'modalAlert'}>
          <Text style={{fontWeight: 'bold',fontSize: 17, color: '#009B09'}}>Thông báo</Text>
          <Text style={{fontWeight: 'bold',fontSize: 17, marginTop: 5}}>
            Bạn muốn hủy yêu cầu nạp tiền này?
          </Text>
          <Text style={{marginTop: 5,fontSize: 17,}}>
            Số tiền nạp: <Text>10.000</Text>
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity onPress={() => this.refs.modalAlert.close()}>
              <Text style={{margin: 10,fontSize: 17,}}>Đóng</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.OpenModal();
              }}>
              <Text style={{margin: 10, color: '#009B09',fontSize: 17,}}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <SuccessModal ref="modalSuccess" text={'Hủy thành công'} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  modalAlert: {
    height: 160,
    width: '95%',
    alignItems: 'center',
    padding: 30,
  },
});
