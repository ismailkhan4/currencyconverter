import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import style from './style';

const CustomInput = props => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.buttonContainer} onPress={props.onPress}>
        <Text style={style.buttonText}>{props.buttonText}</Text>
      </TouchableOpacity>
      <View style={style.border} />
      <TextInput
        style={style.input}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        editable={props.editable}
      />
    </View>
  );
};

export default CustomInput;
