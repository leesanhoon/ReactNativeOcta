import {createSwitchNavigator} from 'react-navigation';

import AuthNavigation from './AuthNavigation.js';
import AppNavigation from './AppNavigation.js';

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppNavigation,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default SwitchNavigator;
