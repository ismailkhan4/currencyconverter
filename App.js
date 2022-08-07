import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {createContext, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import StackNavigation from './src/app/navigation/StackNav';

export const ThemePreferenceContext = createContext();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
