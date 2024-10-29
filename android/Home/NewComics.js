import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ComicListSection from './ComicListSection';

const newComicsData = [
  { id: '1', title: 'Wistoria: Wand and Sword', image: require('./assets/wistoria.jpg'), daysAgo: '1 ngày trước', status: 'Hot' },
  { id: '2', title: 'Sakamoto Days', image: require('./assets/sakamoto_days.jpg'), daysAgo: '2 ngày trước', status: 'Hot' },
  { id: '3', title: 'Murenase', image: require('./assets/murenase.jpg'), daysAgo: '5 ngày trước', status: 'Hot' },
  { id: '4', title: 'Tensei Shitara Slime Datta Ken', image: require('./assets/wistoria.jpg'), daysAgo: '7 ngày trước', status: 'Hot' },
];

const NewComics = ({ onSeeAllPress }) => {
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
    <ComicListSection
      title="Truyện Mới Cập Nhật"
      data={newComicsData}
      renderItem={renderItem}
      onSeeAllPress={onSeeAllPress}
      seeAllIcon={require('./assets/right.jpg')}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#f5f5f5',
    width: 150,
  },
  infoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'column',
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
  },
  image: {
    width: '100%',
    height: 125,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default NewComics;