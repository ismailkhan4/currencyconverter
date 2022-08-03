import {View, Text, Image} from 'react-native';
import React from 'react';
import {images} from '../../assets';

const Logo = () => {
  return (
    <View>
      <Image source={images.logo} style={{width: 120, height: 120}} />
    </View>
  );
};

export default Logo;
