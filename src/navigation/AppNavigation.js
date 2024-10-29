import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import config from '../config';
import LoginScreen from '../screens/auth/login';
import HomeScreen from '../screens/user/home';
import RootNavigation from './RootNavigation';

const {HOME, LOGIN, SIGN_UP, SPLASH, INTRO} = config.screenKey;

const AppScreen = {
  [LOGIN]: LoginScreen,
  [HOME]: HomeScreen,
};
const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        RootNavigation.setTopLevelNavigator(navigatorRef);
      }}>
      <Stack.Navigator
        initialRouteName={SPLASH}
        screenOptions={{headerShown: false}}>
        {Object.keys(AppScreen).map((item, index) => (
          <Stack.Screen key={index} name={item} component={AppScreen[item]} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
