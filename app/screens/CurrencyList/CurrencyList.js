import {FlatList} from 'react-native';
import React, {useState} from 'react';

import currencies from '../../data/currencies';
import ListItem from './ListItem';
import {useNavigation} from '@react-navigation/native';

const CurrencyList = ({route}) => {
  const {
    selectedCurr,
    selectedToCurr,
    selectedFromCurr,
    type,
    handleSelectedCurr,
  } = route.params;

  const navigation = useNavigation();

  return (
    <FlatList
      data={currencies}
      renderItem={({item}) => (
        <ListItem
          text={item}
          selectedCurr={selectedCurr}
          selected={selectedCurr}
          onPress={() => {
            navigation.navigate('Home', handleSelectedCurr(item));
          }}
        />
      )}
    />
  );
};

export default CurrencyList;
