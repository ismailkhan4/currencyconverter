import {View, Text, Linking} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components';
import handleTheme from '../../helper';
import {useNavigation} from '@react-navigation/native';

const data = [
  {name: 'Themes', url: 'ThemeList'},
  {name: 'Fixer.io', url: 'https://fixer.io'},
];

const Options = () => {
  const themes = handleTheme();
  const navigation = useNavigation();

  const Container = styled.View`
    margin: 20px 0;
  `;

  const Section = styled.TouchableOpacity`
    padding: 0 10px;
  `;
  const Title = styled.Text`
    font-size: 16px;
  `;
  const Divider = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${themes.homeBackground};
    margin: 10px 0;
  `;
  return (
    <Container>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <Section
            onPress={() =>
              index === 0
                ? navigation.navigate(`ThemeList`)
                : Linking.openURL('https://fixer.io')
            }>
            <Title>{item.name}</Title>
            {!index ? <Divider /> : null}
          </Section>
        )}
      />
    </Container>
  );
};

export default Options;
