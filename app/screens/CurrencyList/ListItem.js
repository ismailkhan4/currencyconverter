import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import style from './style';
import {images} from '../../assets';

const ListItem = props => {
  const {selectedCurr} = props;
  //   console.log('selectedCurr', selectedCurr);
  return (
    <TouchableOpacity style={style.conatiner} onPress={props.onPress}>
      <Text style={style.text}>{props.text}</Text>
      {props.selected ? (
        <View style={style.selectContainer}>
          <Image source={images.selected} style={style.selectImage} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default ListItem;
