import React from 'react';
import styled from 'styled-components/native';
import handleTheme from '../../helper';

const CustomInput = props => {
  const theme = handleTheme();

  const Container = styled.View`
    height: 48px;
    border-radius: 4px;
    width: 90%;
    flex-direction: row;
    margin: 11px 0;
    background-color: ${theme.white};
    justify-content: center;
    align-items: center;
  `;
  const Touchable = styled.TouchableOpacity`
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.white};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
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
    padding: 0 8px;
  `;

  return (
    <Container>
      <Touchable onPress={props.onPress}>
        <BtnText>{props.buttonText}</BtnText>
      </Touchable>
      <Border />
      <Input
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        editable={props.editable}
        keyboardType="numeric"
      />
    </Container>
  );
};

export default CustomInput;
