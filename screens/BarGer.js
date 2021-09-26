import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Barcode from '../components/BarGerComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Barcode
        value="123456789999"
        options={{ format: 'UPC', background: 'Cyan' }}
        rotation={-5}
      />
      <Barcode
        value="9501101530003"
        options={{ format: 'EAN13', background: 'yellow' }}
      />
      <Barcode
        value="7895641245"
        options={{ format: 'CODE128', background: 'pink' }}
        rotation={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});