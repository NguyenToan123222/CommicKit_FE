import React, {useEffect} from 'react';
import {Alert, BackHandler} from 'react-native';

import HomeMainView from './template/HomeMainView';
import homePropsProvider from './homePropsProvider';

const HomeContainer = props => {
  // useEffect
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => {
      backHandler.remove();
    };
  }, []);

  //props
  const homeProps = {};
  return <HomeMainView {...homePropsProvider(homeProps)} />;
};

export default HomeContainer;
