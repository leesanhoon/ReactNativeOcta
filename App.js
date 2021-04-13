import React from 'react';
import {createAppContainer} from 'react-navigation';
import SwitchNavigator from './SwitchNavigator';
import {Root} from 'native-base';

import {Provider} from 'react-redux';
import store from './src/redux/store';
import codePush from 'react-native-code-push';
import { StatusBar } from 'react-native';

const AppContainer = createAppContainer(SwitchNavigator);

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};
class App extends React.Component {
  UNSAFE_componentWillMount() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
    });
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppContainer />
        </Root>
      </Provider>
    );
  }
}

App = codePush(codePushOptions)(App);

export default App;
