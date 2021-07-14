import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/Login/SignInScreen';
import LogInScreen from '../screens/Login/LogInScreen';
import WebScreen from '../screens/Login/WebScreen';
import Loading from '../screens/Login/Loading';
import UpdateScreen from '../screens/Login/UpdateScreen';

const AppStack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen name={'loading'} component={Loading} />
        <AppStack.Screen name={'login'} component={LogInScreen} />
        <AppStack.Screen name={'signin'} component={SignInScreen} />
        <AppStack.Screen name={'webview'} component={WebScreen} />
        <AppStack.Screen name={'update'} component={UpdateScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
