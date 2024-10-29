/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/app/store';
import AppNavigation from './src/navigation/AppNavigation';
import commonStyles from './src/styles/commonStyles';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={commonStyles.container}>
        <StatusBar barStyle={'dark-content'} />
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
