import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {createContext, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import StackNavigation from './src/app/navigation/StackNav';
import {StatusBar} from 'react-native';
import handleTheme from './src/app/helper';

export const ThemePreferenceContext = createContext();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const themes = handleTheme();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={themes.primary} />
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
