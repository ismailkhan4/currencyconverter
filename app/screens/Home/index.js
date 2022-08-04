import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {
  ClearButton,
  Container,
  CustomInput,
  Header,
  Logo,
} from '../../components';
import {colors, dimensions} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const Home = ({route}) => {
  const navigation = useNavigation();
  let [selectedFromCurrency, setSelectedFromCurrency] = useState('USD');
  let [selectedToCurrency, setSelectedToCurrency] = useState('PKR');

  const [value, setValue] = useState();

  const currencyRates = [{USD: 220}, {PKR: 1}];

  const handleExchange = () =>
    currencyRates.map(e => {
      if (e.USD) {
        return e.USD * value;
      } else if (e.PKR) {
        return e.PKR * value;
      }
    });

  return (
    <Container>
      <Header onPress={() => {}} />
      <Logo />
      <View style={{marginVertical: dimensions.normal}} />
      <Text style={{color: colors.white, fontSize: dimensions.extended}}>
        Currency Converter
      </Text>
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
      {console.log(
        currencyRates.map(e => {
          if (e.USD) {
            return e.USD * value;
          } else if (e.PKR) {
            return e.PKR * value;
          }
        })[1],
      )}
      <ClearButton
        text="Reverse Currencies"
        onPress={
          // eslint-disable-next-line no-return-assign
          (() =>
            (selectedToCurrency = [
              selectedFromCurrency,
              (selectedFromCurrency = selectedToCurrency),
            ][0]),
          console.log('selected', selectedFromCurrency, selectedToCurrency))
        }
      />
    </Container>
  );
};

export default Home;
