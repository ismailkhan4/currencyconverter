import React from 'react';
import {images} from '../../../assets';
import handleTheme from '../../helper';
import styled from 'styled-components/native';

const SubmitButton = props => {
  const theme = handleTheme();
  const Wrapper = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    background-color: ${theme.primary};
    width: 80%;
    height: 48px;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
  `;
  const BtnText = styled.Text`
    font-size: 16px;
    font-weight: 500;
    color: ${theme.white};
    /* padding: 20px 0; */
  `;

  return (
    <Wrapper onPress={props.onPress}>
      <BtnText>{props.text}</BtnText>
    </Wrapper>
  );
};

export default SubmitButton;
