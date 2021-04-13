//import liraries
import React, {Component} from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modalbox';

// create a component
class SuccessModal extends Component {

  open(){
    this.refs.modalSuccess.open();
  }

  render() {
    return (
      <>
        {/* {modalSuccess} */}
        <Modal
          style={styles.modalSuccess}
          position={'center'}
          ref={'modalSuccess'}>
          <Text style={{fontWeight: 'bold', fontSize: 17}}>{this.props.text}</Text>
          <TouchableOpacity onPress={() => this.refs.modalSuccess.close()}>
            <Text style={{marginTop: 10,fontSize: 17, color: '#009B09'}}>OK</Text>
          </TouchableOpacity>
        </Modal>
      </>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  modalSuccess: {
    height: 100,
    width: '95%',
    alignItems: 'center',
    padding: 30,
  },
});

//make this component available to the app
export default SuccessModal;
