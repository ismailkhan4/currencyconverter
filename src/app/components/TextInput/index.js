import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import handleTheme from '../../helper';

const CustomInput = props => {
  const theme = handleTheme();

  const Container = styled.View`
    height: 48px;
    border-radius: 4px;
    width: 80%;
    flex-direction: row;
    margin: 11px 0;
    background-color: ${theme.white};
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  `;
  const Touchable = styled.TouchableOpacity`
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.white};
  `;
  const BtnText = styled.Text`
    font-weight: 400;
    font-size: 20px;
    padding: 0 16px;
    color: ${theme.primary};
  `;
  const Border = styled.View`
    height: 48px;
    width: 1px;
    background-color: ${theme.homeBackground};
  `;
  const Input = styled.TextInput`
    height: 48px;
    display: flex;
    flex: 1;
    padding: ${props.currencyBtn ? '0 8px' : '0 20px'};
  `;

  return (
    <Container>
      {props.currencyBtn ? (
        <Touchable onPress={props.onPress}>
          <BtnText>{props.buttonText}</BtnText>
        </Touchable>
      ) : null}
      <Border />
      <Input
        placeholder={props.placeholder}
        value={props.value}
        onEndEditing={props.onEndEditing}
        editable={props.editable}
        {...props}
      />
    </Container>
  );
};

export default CustomInput;
