import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const newComicsData = [
  { id: '1', title: 'Wistoria: Wand and Sword', image: require('./assets/wistoria.jpg'), daysAgo: '1 ngày trước', status: 'Hot' },
  { id: '2', title: 'Sakamoto Days', image: require('./assets/sakamoto_days.jpg'), daysAgo: '2 ngày trước', status: 'Hot' },
  { id: '3', title: 'Murenase', image: require('./assets/murenase.jpg'), daysAgo: '5 ngày trước', status: 'Hot' },
  { id: '4', title: 'Tensei Shitara Slime Datta Ken', image: require('./assets/wistoria.jpg'), daysAgo: '7 ngày trước', status: 'Hot' },
];

const DetailNewComics = ({ goBack }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.infoContainer}>
        <Text style={styles.daysAgo}>{item.daysAgo}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <FlatList
        data={newComicsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#004080',
    borderRadius: 5,
    alignSelf: 'flex-start',

  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  item: {
    marginBottom: 20,
  },
  infoContainer: {
    position: 'absolute',
    top: 10, 
    left: 10, 
    flexDirection: 'row',
    zIndex: 1,
  },
  daysAgo: {
    backgroundColor: '#004080',
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    marginBottom: 2,
    borderRadius: 30,
  },
  status: {
    backgroundColor: '#FF0000',
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    borderRadius: 30,
    width: 35,
    marginLeft: 5, 
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default DetailNewComics;
