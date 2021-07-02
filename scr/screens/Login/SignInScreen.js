import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import TouchID from 'react-native-touch-id';
import auth from '@react-native-firebase/auth'


const SignInScreen = props => {
  const {navigation} = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    // if (reg.test(email) === false) {
    //   return setMessage('email không đúng');
    // };
    if(email === '' || password === '' || username === '' ){
      return setMessage('Hãy nhập đầy đủ thông tin.');
    };
    if (password.length < 8) {
      return setMessage('Mật khẩu phải nhiểu hơn 8 kí tự.');
    };
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('login success');
        navigation.navigate('login');
        setMessage('');
        setUsername('');
        setPassword('');
        setEmail('');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setMessage('Email đã được sử dụng.');
        }
        if (error.code === 'auth/invalid-email') {
          setMessage('Email không đúng.');
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder={'Họ và tên'}
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder={'Email'}
          secureTextEntry={true}
          value={email}
          keyboardType={'email-address'}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder={'Mật khẩu'}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <View>
        <Text style={styles.message}>{message}</Text>
      </View>
      {/*<TouchableOpacity>*/}
      {/*  <Text style={styles.forgot}>Forgot your password?</Text>*/}
      {/*</TouchableOpacity>*/}
      <TouchableOpacity style={styles.loginBtn} onPress={() => handleSignUp()}>
        <Text style={{fontSize: 17, color: '#fff'}}>Đăng ký</Text>
      </TouchableOpacity>
      <View style={styles.signInText}>
        <Text style={{fontSize: 17}} onPress={() => navigation.navigate('login')}>Đăng Nhập</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    // backgroundColor: '#ee9cac',
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 10,
    width: '70%',
    height: 50,
    marginBottom: 20,
    // alignItems: 'center',
  },
  textInput: {
    color: '#000',
    fontSize: 18,
    height: 40,
    flex: 1,
    marginLeft: 10,
  },
  loginBtn: {
    fontSize: 30,
    width: '70%',
    borderRadius: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#0476ef',
  },
  forgot: {
    fontSize: 20,
    color: '#646464',
  },
  signInText: {
    marginTop: 20,
    color: '#000',
  },
  message: {
    color: '#f00',
  },
});

export default SignInScreen;
