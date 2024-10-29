import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const topAuthorsData = [
  { id: '1', name: 'Yamashita Bungo', followers: '100k', image: require('./assets/author1.jpg') },
  { id: '2', name: 'Kojima Yu', followers: '1000k', image: require('./assets/author2.jpg') },
  { id: '3', name: 'Sato Akira', followers: '10k', image: require('./assets/author3.jpg') },
];

const TopAuthors = ({ onSeeAllPress }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.details}>{item.followers} followers</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Top Authors</Text>
        <TouchableOpacity onPress={onSeeAllPress}>
          <Image source={require('./assets/right.jpg')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={topAuthorsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
  },
  item: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
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

export default TopAuthors;
