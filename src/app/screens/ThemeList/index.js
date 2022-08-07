import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import THEME_DATA from './themeData';
import {dimensions} from '../../../assets';
import {themes} from '../../../assets/theme';
import {green, spring, salmon, web} from '../../../features/theme/themeSlice';
import {useNavigation} from '@react-navigation/native';

const ThemeList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <FlatList
      data={THEME_DATA}
      renderItem={({item, index}) => (
        <TouchableOpacity
          style={{
            padding: dimensions.normal,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onPress={() => {
            if (item.name === 'green') {
              dispatch(green());
            } else if (item.name === 'spring') {
              dispatch(spring());
            } else if (item.name === 'salmon') {
              dispatch(salmon());
            } else {
              dispatch(web());
            }
            navigation.navigate('Home');
          }}>
          <Text>
            {`${item.name.charAt(0).toUpperCase()}${item.name.slice(1)}`}
          </Text>
          <View
            style={{
              width: dimensions.normal * 1.5,
              height: dimensions.normal * 1.5,
              backgroundColor: themes[item.name].primary,
              borderRadius: dimensions.extended,
            }}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default ThemeList;
