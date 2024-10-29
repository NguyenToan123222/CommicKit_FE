import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import HotComics from './HotComics';
import NewComics from './NewComics';
import TopAuthors from './TopAuthors';
import Footer from './Footer';
import DetailHotComics from './DetailHotComics';
import DetailNewComics from './DetailNewComics';
import DetailTopAuthors from './DetailTopAuthors';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('main');

  const handleSeeAll = (screen) => {
    setCurrentScreen(screen);
  };

  const goBack = () => {
    setCurrentScreen('main');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'hotComics':
        return <DetailHotComics goBack={goBack} />;
      case 'newComics':
        return <DetailNewComics goBack={goBack} />;
      case 'topAuthors':
        return <DetailTopAuthors goBack={goBack} />;
      default:
        return (
          <>
            <Header />
            <HotComics onSeeAllPress={() => handleSeeAll('hotComics')} />
            <NewComics onSeeAllPress={() => handleSeeAll('newComics')} />
            <TopAuthors onSeeAllPress={() => handleSeeAll('topAuthors')} />
            <Footer />
          </>
        );
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
