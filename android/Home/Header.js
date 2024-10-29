import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('./assets/comic_kit.jpg')} style={styles.logo} />
      <Text style={styles.title}>Comic Kit</Text>
      <Image source={require('./assets/notification.jpg')} style={styles.notificationIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 40,
    height: 40,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationIcon: {
    width: 30,
    height: 30,
  },
});

export default Header;
