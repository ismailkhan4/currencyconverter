import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../assets';
import styles from './styles';

const Header = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={images.settings} style={styles.image} />
    </TouchableOpacity>
  );
};

export default Header;
