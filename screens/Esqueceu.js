import * as React from 'react';
import { SafeAreaView } from 'react-native';
import EsqueceuComponent from '../components/EsqueceuComponent';

const Esqueceu = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <EsqueceuComponent navigation={navigation} />
    </SafeAreaView>
  );
};

export default Esqueceu;
