import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CurrencyList, Home} from '../../screens';
import ThemeList from '../../screens/ThemeList';

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={{
          headerShown: true,
          // header: () => <Text>Currencies</Text>
        }}
      />
      <Stack.Screen
        name="ThemeList"
        component={ThemeList}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
