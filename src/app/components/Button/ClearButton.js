import React from 'react';
import {images} from '../../../assets';
import handleTheme from '../../helper';
import styled from 'styled-components/native';

const ClearButton = props => {
  const theme = handleTheme();

  const Container = styled.TouchableOpacity`
    align-items: center;
  `;
  const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
  `;
  const Icon = styled.Image`
    width: 19px;
    margin-right: 11px;
    height: 20px;
  `;
  const BtnText = styled.Text`
    color: ${theme.primary};
    font-size: 14px;
    font-weight: 300;
    padding: 20px 0;
  `;

  return (
    <Container onPress={props.onPress}>
      <Wrapper>
        <Icon source={images.revert} tintColor={theme.primary} />
        <BtnText>{props.text}</BtnText>
      </Wrapper>
    </Container>
  );
};

export default ClearButton;
