import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
  AsyncStorage,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

const CustomDrawerComponent = props => (
  
  <SafeAreaView style={{backgroundColor: 'white'}}>
    <View style={styles.viewLogo}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
    </View>
    <ScrollView style={styles.scrollView}>
      <DrawerNavigatorItems
        labelStyle={{color: 'black', fontSize: 17}}
        activeBackgroundColor="#B2B2B2"
        {...props}
      />
      <TouchableOpacity
        style = {{marginTop : 10}}
        border
        title="Đăng xuất"
        onPress={() => {
          AsyncStorage.clear();
          props.navigation.navigate('Login');
        }}>
        <Text style={styles.button}> Đăng xuất </Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
  
);

const styles = StyleSheet.create({
  viewLogo: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 250,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 11,
  },
});

export default CustomDrawerComponent;
