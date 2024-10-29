import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const hotComicsData = [
  { id: '1', title: 'Dandadan', image: require('./assets/dandadan.jpg'), daysAgo: '50 ngày trước', status: 'Hot' },
  { id: '2', title: 'One-Punch Man', image: require('./assets/one_punch_man.jpg'), daysAgo: '23 ngày trước', status: 'Hot' },
  { id: '3', title: 'Mato Seihei no Yakusoku', image: require('./assets/mato_seihei_no_yakusoku.jpg'), daysAgo: '12 ngày trước', status: 'Hot' },
  { id: '4', title: 'Mission yori Aishite', image: require('./assets/mission_yori_aishite.jpg'), daysAgo: '15 ngày trước', status: 'Hot' },
];

const DetailHotComics = ({ goBack }) => {
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
        data={hotComicsData}
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
    backgroundColor: '#f8f8f8',
  },
  backButton: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#004080',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#eaeaea',
  },
  daysAgo: {
    backgroundColor: '#004080',
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 15,
  },
  status: {
    backgroundColor: '#FF0000',
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: 170,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default DetailHotComics;
