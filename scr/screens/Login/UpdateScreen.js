import React from 'react';
import {WebView} from 'react-native-webview';

const UpdateScreen = props => {
  const {navigation} = props;
  // const editUrl = url => {
  //   return url.slice(url.search('vnp_ResponseCode'), 19);
  // };

  return (
    <WebView
      source={{
        uri: 'http://192.168.0.125:8888/order/create_payment_url',
      }}
      onNavigationStateChange={({url}) => {
        console.log('url: ', url);
        let code = url.substr(url.search('vnp_ResponseCode'), 19);
        if (code === 'vnp_ResponseCode=00') {
          navigation.navigate('webview', {param: true});
        }
      }}
    />
    // <View style={styles.container}>
    //   <Text style={styles.text}>Loading</Text>
    //   <Pressable
    //     style={styles.button}
    //     onPress={() => {
    //       console.log('back');
    //       navigation.navigate('webview');
    //     }}>
    //     <Text style={styles.text}>
    //       Back
    //     </Text>
    //   </Pressable>
    //   <ActivityIndicator size="large" color="#00ff00" />
    // </View>
  );
};
export default UpdateScreen;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     margin: 20,
//     fontSize: 20,
//     color: '#000',
//   },
// });
