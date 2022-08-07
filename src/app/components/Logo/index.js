import React from 'react';
import {View} from 'react-native';
import {images} from '../../../assets';
import {Icon} from './style';

const Logo = () => {
  return (
    <View>
      <Icon source={images.logo} />
    </View>
  );
};

export default Logo;
