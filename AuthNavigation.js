import { createStackNavigator } from 'react-navigation-stack'
import Login from "./screens/Login/Login";
import LoginOTP from "./screens/Login/LoginOtp";

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    LoginOTP: { screen: LoginOTP },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

export default AuthNavigation