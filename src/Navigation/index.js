import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../../src/Container/Splash';
import Account from '../../src/Container/Account';
import Login from '../../src/Container/AuthFlow/Login';
import SignUp from '../../src/Container/AuthFlow/SignUp';
import ForgetPassword from '../../src/Container/AuthFlow/Forgetpassword';
import appLanguage from '../../src/Container/AppLanguages'


const Stack = createStackNavigator();

    function MyStack() {
      return (
        <Stack.Navigator initialRouteName="Account"headerMode="none" >
           <Stack.Screen name ='splash' component={Splash}/>
           <Stack.Screen name ="Account" component={Account}/>
           <Stack.Screen name="Login" component={Login}/> 
           <Stack.Screen name="SignUp" component={SignUp}/>
           <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
           <Stack.Screen name='appLanguage' component={appLanguage}/>
        </Stack.Navigator>
      );
    }
export default function _Navigation() {
  return (

    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}