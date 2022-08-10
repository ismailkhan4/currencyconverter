import React, {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';
import {images} from '../../../assets';
import {Icon} from './style';

const Logo = props => {
  return (
    <View>
      <Animated.Image source={images.logo} style={props.style} />
    </View>
  );
};

export default Logo;
