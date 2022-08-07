import React from 'react';
import {images} from '../../../assets';
import handleTheme from '../../helper';

import {Wrapper, Icon} from './styles';

const Header = props => {
  const theme = handleTheme();
  return (
    <Wrapper onPress={props.onPress}>
      <Icon source={images.settings} tintColor={theme.primary} />
    </Wrapper>
  );
};

export default Header;
