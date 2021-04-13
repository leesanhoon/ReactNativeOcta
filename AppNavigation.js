import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomDrawerComponent from './components/CustomDrawerComponent';

import Home from './screens/Home/Home';
import Deposit from './screens/Deposit/Deposit';
import DepositDetail from './screens/Deposit/DepositDetail';

import Topup from './screens/Topup/Topup';
import TopupDetail from './screens/Topup/TopupDetail';
import TopupFinal from './screens/Topup/TopupFinal';

import PayCode from './screens/PayCode/PayCode';
import PayCodeDetail from './screens/PayCode/PayCodeDetail';
import PayCodeFinal from './screens/PayCode/PayCodeFinal';

import Employee from './screens/Employee/Employee';
import Agent from './screens/Agent/Agent';

import History from "./screens/History/History";
import DetailHistory from "./screens/History/DetailHistory";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },

    Topup: {
      screen: Topup,
    },
    TopupDetail: {
      screen: TopupDetail,
    },
    TopupFinal: {
      screen: TopupFinal,
    },

    Employee: {
      screen: Employee,
    },

    Deposit: {
      screen: Deposit,
    },
    DepositDetail: {
      screen: DepositDetail,
    },

    Agent: {
      screen: Agent,
    },

    PayCode: {
      screen: PayCode,
    },
    PayCodeGame: {
      screen: PayCode,
    },
    PayCodeOther: {
      screen: PayCode,
    },
    PayCodeDetail: {
      screen: PayCodeDetail,
    },
    PayCodeFinal: {
      screen: PayCodeFinal,
    },

    History: {
      screen: History,
    },
    DetailHistory: {
      screen: DetailHistory
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        width: '80%',
        textAlign: 'center',
        color: 'black'
      },
    },
  },
);

const HistoryStack = createStackNavigator({
  History: History,
  DetailHistory: DetailHistory,
});

const DepositStack = createStackNavigator({
  Deposit: Deposit,
  DepositDetail: DepositDetail,
});
const AgentStack = createStackNavigator({
  Agent: Agent,
});

const PaycodeStack = createStackNavigator({
  PayCode: PayCode,
  PayCodeDetail: PayCodeDetail,
  PayCodeFinal: PayCodeFinal
});

const PayCodeGameStack = createStackNavigator({
  PayCode: PayCode,
  PayCodeDetail: PayCodeDetail,
  PayCodeFinal: PayCodeFinal
});

const PayCodeOtherStack = createStackNavigator({
  PayCode: PayCode,
  PayCodeDetail: PayCodeDetail,
  PayCodeFinal: PayCodeFinal
});

const TopupStack = createStackNavigator({
  Topup: Topup,
  TopupDetail: TopupDetail,
  TopupFinal: TopupFinal
});

const EmployeeStack = createStackNavigator({
  Employee: Employee,
});

const AppNavigation = createDrawerNavigator(
  {
    Home: { screen: HomeStack, navigationOptions: { drawerLabel: 'Trang chủ' } },
    Agent: {
      screen: AgentStack,
      navigationOptions: { drawerLabel: 'Thông tin Đại lý - Tài khoản' },
    },
    Deposit: {
      screen: DepositStack,
      navigationOptions: { drawerLabel: 'Nạp tiền' },
    },
    History: {
      screen: HistoryStack,
      navigationOptions: { drawerLabel: 'Lịch sử giao dịch' },
    },
    Employee: {
      screen: EmployeeStack,
      navigationOptions: { drawerLabel: 'Nhân viên' }
    },
    PayCode: {
      screen: PaycodeStack,
      navigationOptions: { drawerLabel: 'Mua thẻ điện thoại' },
    },
    PayCodeGame: {
      screen: PayCodeGameStack,
      navigationOptions: { drawerLabel: 'Mua thẻ game' },
    },
    PayCodeOther: {
      screen: PayCodeOtherStack,
      navigationOptions: { drawerLabel: 'Mua thẻ khác' },
    },
    Topup: {
      screen: TopupStack,
      navigationOptions: {
        drawerLabel: 'Nạp tiền điện thoại',
      },
    }
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle' 
  },
);

export default AppNavigation;
