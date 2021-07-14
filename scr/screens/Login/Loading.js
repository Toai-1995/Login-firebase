import React, { useEffect } from "react";
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

const Loading = props => {
  const {navigation} = props;

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      user ? navigation.navigate('webview') : navigation.navigate('login')
    })
  },[])
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Loading</Text>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};
export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 20,
    fontSize: 20,
    color: '#000',
  }
});
