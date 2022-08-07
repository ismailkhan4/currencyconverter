import React from 'react';

import {images} from '../../../assets';
import styled from 'styled-components/native';

import handleTheme from '../../helper';

const ListItem = props => {
  const theme = handleTheme();

  const Container = styled.TouchableOpacity`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
  `;
  const Title = styled.Text`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  `;
  const Wrapper = styled.View`
    align-items: center;
    justify-content: center;
    background-color: ${theme.primary};
    height: 30px;
    width: 30px;
    border-radius: 15px;
  `;
  const Icon = styled.Image`
    width: 15px;
    height: 15px;
  `;
  const Line = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${theme.homeBackground};
  `;
  return (
    <>
      <Container onPress={props.onPress}>
        <Title>{props.text}</Title>

        {props.selected ? (
          <Wrapper>
            <Icon source={images.selected} tintColor={theme.white} />
          </Wrapper>
        ) : null}
      </Container>
      <Line />
    </>
  );
};

export default ListItem;
