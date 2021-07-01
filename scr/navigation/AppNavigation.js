import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/Login/SignInScreen';
import LogInScreen from '../screens/Login/LogInScreen';
import WebScreen from '../screens/Login/WebScreen';

const AppStack = createStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen name={'signin'} component={SignInScreen} />
        <AppStack.Screen name={'login'} component={LogInScreen} />
        <AppStack.Screen name={'webview'} component={WebScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
