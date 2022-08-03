import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, images} from '../../assets';
import style from './style';

const ClearButton = props => {
  return (
    <TouchableOpacity style={style.container} onPress={props.onPress}>
      <View style={style.wrapper}>
        <Image source={images.revert} style={style.icon} />
        <Text style={style.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ClearButton;
