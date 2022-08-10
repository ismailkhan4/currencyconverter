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
  const [swapCurrency, setSwapCurrency] = useState(false);

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
          navigation.navigate('Options');
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
        buttonText={
          swapCurrency
            ? (selectedToCurrency = selectedToCurrency)
            : selectedFromCurrency
        }
        placeholder="Enter amount"
        value={
          swapCurrency
            ? `${
                currencyRates.map(e => {
                  if (e.USD) {
                    return e.USD * value;
                  } else if (e.PKR) {
                    return e.PKR * value;
                  }
                })[0]
              }`
            : value
        }
        onEndEditing={event => {
          setValue(event.nativeEvent.text);
          console.log(event);
        }}
        currencyBtn
      />
      <CustomInput
        onPress={() => {
          navigation.navigate('CurrencyList', {
            selectedToCurr: `${selectedToCurrency}`,
            handleSelectedCurr: setSelectedToCurrency,
          });
        }}
        buttonText={
          swapCurrency
            ? (selectedToCurrency = selectedFromCurrency)
            : selectedToCurrency
        }
        value={
          swapCurrency
            ? value
            : `${
                currencyRates.map(e => {
                  if (e.USD) {
                    return e.USD * value;
                  } else if (e.PKR) {
                    return e.PKR * value;
                  }
                })[0]
              }`
        }
        onEndEditing={event => setValue(event.nativeEvent.text)}
        editable={false}
        currencyBtn
      />
      {console.log('swap', selectedFromCurrency, selectedToCurrency)}
      <ClearButton
        text="Reverse Currencies"
        onPress={() => {
          setSwapCurrency(!swapCurrency);
        }}
      />
    </Container>
  );
};

export default Home;
