import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const LogInScreen = props => {
  const {navigation} = props;
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLogedIn, setIsLogedIn] = useState(false);

  const handleLogIn = () => {
    if (password === '' || email === '') {
      return setMessage('Hãy nhập đầy đủ thông tin.');
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log(userCredential.user);
        setIsLogedIn(true);
        // setMessage('Log in success');
        navigation.navigate('webview')
      })
      .catch(err => {
        setMessage('Email hoặc mật khẩu không đúng.');
        setIsLogedIn(false);
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
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
        <Text style={isLogedIn ? styles.messageSuccess : styles.messageFail}>
          {message}
        </Text>
      </View>
      {/*<TouchableOpacity>*/}
      {/*  <Text style={styles.forgot}>Forgot your password?</Text>*/}
      {/*</TouchableOpacity>*/}
      <TouchableOpacity style={styles.loginBtn} onPress={() => handleLogIn()}>
        <Text style={{fontSize: 17, color: '#fff'}}>Đăng Nhập</Text>
      </TouchableOpacity>
      <View style={styles.signInText}>
        <Text
          style={{fontSize: 17}}
          onPress={() => navigation.navigate('signin')}>
          Đăng ký
        </Text>
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
  messageSuccess: {
    color: '#02b702',
  },
  messageFail: {
    color: '#f30214',
  },
  forgot: {
    fontSize: 20,
    color: '#646464',
  },
  signInText: {
    marginTop: 20,
    color: '#646464',
  },
});

export default LogInScreen;
