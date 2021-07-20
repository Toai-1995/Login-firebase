import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  Pressable,
  Dimensions,
  TouchableHighlight,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {WebView} from 'react-native-webview';
import auth from '@react-native-firebase/auth';
const windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;

const WebScreen = props => {
  const {navigation, route} = props;
  const logOut = () => {
    auth()
      .signOut()
      .then(navigation.navigate('login'))
      .catch(err => console.log('err: ', err));
  };
  // const [modalVisible, setModalVisible] = useState(false);
  // const [viewPosition, setViewPosition] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.webview}>
        <WebView source={{uri: 'https://g3.gooc.us/app/'}} />
      </View>
      {/*{!route.params && (*/}
      {/*  <View style={{position: 'absolute', top: 55, zIndex: 1}}>*/}
      {/*    <View*/}
      {/*      style={{*/}
      {/*        justifyContent: 'center',*/}
      {/*        alignItems: 'center',*/}
      {/*        backgroundColor: '#fff',*/}
      {/*        height: windowHeight - 55,*/}
      {/*        width: windowWidth,*/}
      {/*        opacity: 1,*/}
      {/*      }}>*/}
      {/*      <Pressable style={styles.button}>*/}
      {/*        <Text*/}
      {/*          style={styles.text}*/}
      {/*          onPress={() => {*/}
      {/*            navigation.navigate('update');*/}
      {/*          }}>*/}
      {/*          Nâng cấp*/}
      {/*        </Text>*/}
      {/*      </Pressable>*/}
      {/*      <Pressable style={styles.button}>*/}
      {/*        <Text style={styles.text}*/}
      {/*          onPress={() => {*/}
      {/*            navigation.navigate('update');*/}
      {/*          }}>*/}
      {/*          Nâng cấp*/}
      {/*        </Text>*/}
      {/*      </Pressable>*/}
      {/*    </View>*/}
      {/*  </View>*/}
      {/*)}*/}

      {/*<View>*/}
      {/*  <View style={{flexDirection: 'row', alignSelf: 'center', backgroundColor : '#fff'}}>*/}
      {/*    <Pressable*/}
      {/*      style={styles.button}*/}
      {/*      onPress={() => setModalVisible(true)}>*/}
      {/*      <Text style={styles.text}>Show Modal</Text>*/}
      {/*    </Pressable>*/}
      {/*    <Pressable*/}
      {/*      style={styles.button}*/}
      {/*      onPress={() => {*/}
      {/*        logOut();*/}
      {/*        console.log('log out');*/}
      {/*      }}>*/}
      {/*      <Text style={styles.text}>Log out</Text>*/}
      {/*    </Pressable>*/}
      {/*  </View>*/}
      {/*  <Modal*/}
      {/*    animationType={'slide'}*/}
      {/*    transparent={true}*/}
      {/*    visible={modalVisible}>*/}
      {/*    <View style={styles.modalView}>*/}
      {/*      <Text style={styles.modalText}>Hello World!</Text>*/}
      {/*      <Pressable style={styles.button}>*/}
      {/*        <Text style={styles.text} onPress={() => setModalVisible(false)}>*/}
      {/*          Hide Modal*/}
      {/*        </Text>*/}
      {/*      </Pressable>*/}
      {/*    </View>*/}
      {/*  </Modal>*/}
      {/*</View>*/}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    zIndex: 0,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
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
    position: 'absolute',
    margin: 5,
    width: 200,
    alignSelf: 'center',
    // borderRadius: 20,
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
