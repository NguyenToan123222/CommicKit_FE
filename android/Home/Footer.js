import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Footer = () => {
  const [selected, setSelected] = useState('home');

  const handlePress = (button) => {
    setSelected(button);
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={[
          styles.button,
          selected === 'home' ? styles.selectedButton : null,
        ]}
        onPress={() => handlePress('home')}
      >
        <Image
          source={require('./assets/home.jpg')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selected === 'search' ? styles.selectedButton : null,
        ]}
        onPress={() => handlePress('search')}
      >
        <Image
          source={require('./assets/search.jpg')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selected === 'account' ? styles.selectedButton : null,
        ]}
        onPress={() => handlePress('account')}
      >
        <Image
          source={require('./assets/account.jpg')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '7%', 
    width: '50%', 
    backgroundColor: '#003366', 
    position: 'absolute',
    bottom: 0,
    left: '25%', 
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderRadius: 25,
    
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10, 
  },
  selectedButton: {
    backgroundColor: '#d0e0fc', 
    borderRadius: 20,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default Footer;
