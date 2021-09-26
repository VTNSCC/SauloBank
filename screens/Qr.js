import * as React from 'react';
import { SafeAreaView } from 'react-native';
import QrComponent from '../components/QrComponent';

const Qr = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QrComponent navigation={navigation} />
    </SafeAreaView>
  );
};

export default Qr;
