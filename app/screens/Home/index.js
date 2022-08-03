import {View, Text} from 'react-native';
import React from 'react';
import {ClearButton, Container, CustomInput, Logo} from '../../components';
import {colors, dimensions} from '../../assets';

const Home = () => {
  return (
    <Container>
      <Logo />
      <View style={{marginVertical: dimensions.normal}} />
      <Text style={{color: colors.white, fontSize: dimensions.extended}}>
        Currency Converter
      </Text>
      <View style={{marginVertical: dimensions.normal}} />
      <CustomInput onPress={() => {}} buttonText={'USD'} />
      <CustomInput onPress={() => {}} buttonText={'GBP'} />
      <ClearButton text="Reverse Currencies" />
    </Container>
  );
};

export default Home;
