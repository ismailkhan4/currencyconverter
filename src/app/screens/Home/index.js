import {View} from 'react-native';
import React, {useState} from 'react';
import {ClearButton, CustomInput, Header, Logo} from '../../components';

import {useNavigation} from '@react-navigation/native';

import {dimensions} from '../../../assets';
import handleTheme from '../../helper';

import styled from 'styled-components/native';

const Home = () => {
  const navigation = useNavigation();
  let [selectedFromCurrency, setSelectedFromCurrency] = useState('USD');
  let [selectedToCurrency, setSelectedToCurrency] = useState('PKR');

  const [value, setValue] = useState(0);

  const theme = handleTheme();

  const currencyRates = [{USD: 220}, {PKR: 1}];

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
      <Logo />
      <View style={{marginVertical: dimensions.normal}} />
      <Title>Currency Converter</Title>
      <View style={{marginVertical: dimensions.normal}} />
      <CustomInput
        onPress={() => {
          navigation.navigate('CurrencyList', {
            selectedFromCurr: `${selectedFromCurrency}`,
            handleSelectedCurr: setSelectedFromCurrency,
          });
        }}
        buttonText={selectedFromCurrency}
        placeholder="Enter amount"
        value={value}
        onChangeText={setValue}
      />
      <CustomInput
        onPress={() => {
          navigation.navigate('CurrencyList', {
            selectedToCurr: `${selectedToCurrency}`,
            handleSelectedCurr: setSelectedToCurrency,
          });
        }}
        buttonText={selectedToCurrency}
        value={`${
          currencyRates.map(e => {
            if (e.USD) {
              return e.USD * value;
            } else if (e.PKR) {
              return e.PKR * value;
            }
          })[0]
        }`}
        editable={false}
      />
      <ClearButton
        text="Reverse Currencies"
        onPress={() =>
          (selectedToCurrency = [
            selectedFromCurrency,
            (selectedFromCurrency = selectedToCurrency),
          ][0])
        }
      />
    </Container>
  );
};

export default Home;