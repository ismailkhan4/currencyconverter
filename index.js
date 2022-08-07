/**
 * @format
 */

import React, {StrictMode} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {persistor, store} from './src/app/store';
import {PersistGate} from 'redux-persist/integration/react';

const Root = () => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);

AppRegistry.registerComponent(appName, () => Root);
