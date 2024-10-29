import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import homeStyles from '../homeStyles';

const HomeMainView = props => {
  return (
    <SafeAreaView style={homeStyles.container}>
      <Text>HomeMainView</Text>
    </SafeAreaView>
  );
};

export default HomeMainView;
