import * as React from 'react';
import { SafeAreaView } from 'react-native';
import HomeComponent from '../components/HomeComponent';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeComponent navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
