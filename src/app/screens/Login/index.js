import {
  ActivityIndicator,
  Animated,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {CustomInput, Header, Logo, SubmitButton} from '../../components';

import {useNavigation} from '@react-navigation/native';

import {dimensions} from '../../../assets';
import handleTheme from '../../helper';

import styled from 'styled-components/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoaing] = useState(false);

  const imageAnim = useRef(new Animated.Value(200)).current;

  const handleAnimated = () => {
    Animated.timing(imageAnim, {toValue: 100, duration: 400}).start();
  };
  const reverseAnimated = () => {
    Animated.timing(imageAnim, {toValue: 200, duration: 400}).start();
  };

  const theme = handleTheme();

  const validateEmail = text => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      alert('Email is Not Correct');
      setEmail(text);
      return false;
    } else {
      setEmail(text);
      return true;
    }
  };

  const validatePassword = text => {
    const regPassword =
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
    if (regPassword.test(text) === false) {
      alert('Please use strong Password.');
      setPassword(text);
      return false;
    } else {
      setPassword(text);
      return true;
    }
  };

  const handleSubmit = () => {
    console.log('EmailFound', validateEmail(email));
    console.log('PasswordFound', validatePassword(password));
    setLoaing(true);
    if (validateEmail(email) && validatePassword(password)) {
      //   if (loading) {
      setTimeout(() => {
        setLoaing(false);
        navigation.navigate('Home');
      }, 5000);
      //   }
      console.log('Success');
    } else {
      console.log('Failure');
      setLoaing(false);
    }
    console.log('Email', validatePassword(password));
  };
  const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.homeBackground};
  `;
  const Title = styled.Text`
    font-size: 24px;
    color: ${theme.primary};
    font-weight: 500;
  `;

  return (
    <Container>
      <Header
        onPress={() => {
          navigation.navigate('ThemeList');
        }}
      />
      <Logo style={{width: imageAnim, height: imageAnim}} />
      <View style={{marginVertical: dimensions.normal}} />
      <Title>Login</Title>
      <View style={{marginVertical: dimensions.normal}} />
      <CustomInput
        placeholder="Your Email Address"
        defaultValue={email}
        onEndEditing={event => {
          setEmail(event.nativeEvent.text);
          console.log('email', event.nativeEvent.text);
        }}
        onFocus={handleAnimated}
        onBlur={reverseAnimated}
      />
      <CustomInput
        onPress={() => {}}
        placeholder="Password"
        defaultValue={password}
        onEndEditing={event => {
          setPassword(event.nativeEvent.text);
          console.log('password', event.nativeEvent.text);
        }}
        secureTextEntry={true}
        onFocus={handleAnimated}
        onBlur={reverseAnimated}
      />
      <View style={{height: 10}} />
      <SubmitButton
        text={
          loading ? (
            <ActivityIndicator size="large" color={theme.homeBackground} />
          ) : (
            'Login'
          )
        }
        onPress={handleSubmit}
      />
    </Container>
  );
};

export default Login;
