import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const topAuthorsData = [
  { id: '1', name: 'Yamashita Bungo', followers: '100k', image: require('./assets/author1.jpg') },
  { id: '2', name: 'Kojima Yu', followers: '1000k', image: require('./assets/author2.jpg') },
  { id: '3', name: 'Sato Akira', followers: '10k', image: require('./assets/author3.jpg') },
];

const DetailTopAuthors = ({ goBack }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.details}>{item.followers} followers</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <FlatList
        data={topAuthorsData}
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
  image: {
    width: '100%',
    height: 200,
    borderRadius: 60,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  details: {
    fontSize: 12,
    color: '#555',
  },
});

export default DetailTopAuthors;
