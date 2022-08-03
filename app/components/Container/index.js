import {View} from 'react-native';
import React from 'react';

import styles from './style';

const Container = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;
