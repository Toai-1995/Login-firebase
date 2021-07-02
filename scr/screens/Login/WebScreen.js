import React, { useState } from "react";
import {Text, View, StyleSheet, Modal, Pressable} from 'react-native';
import {WebView} from 'react-native-webview';
import auth from '@react-native-firebase/auth';

const WebScreen = props => {
  const {navigation} = props;
  const logOut = () => {
    auth()
      .signOut()
      .then(navigation.navigate('login'))
      .catch(err => console.log('err: ', err));
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={[styles.container]}>
      <View style={styles.webview}>
        <WebView source={{uri: 'https://g3.gooc.us/app/'}} />
      </View>
      <View>
        <View style={{flexDirection: 'row', alignSelf: 'center', backgroundColor : '#fff'}}>
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.text}>Show Modal</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => {
              logOut();
              console.log('log out');
            }}>
            <Text style={styles.text}>Log out</Text>
          </Pressable>
        </View>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={modalVisible}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable style={styles.button}>
              <Text style={styles.text} onPress={() => setModalVisible(false)}>
                Hide Modal
              </Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    // flex: 1,
    height: '95%',
  },
  textview: {
    backgroundColor: '#fff',
    height: '5%',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    margin: 5,
    width: 100,
    alignSelf: 'center',
    borderRadius: 20,
    padding: 5,
    elevation: 2,
    backgroundColor: '#2e7de9',
  },
  modalView: {
    marginTop: 300,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 35,
    alignSelf: 'center',
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default WebScreen;
