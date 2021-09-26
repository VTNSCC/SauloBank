import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const HomeComponent = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <View style={styles.content}>
        <Image
          style={styles.profileImage}
          source={require('../assets/Saulo.png')}
        />
        <View style={styles.block}>
          <Text style={styles.name}>Olá, Saulão !</Text>
          <Text>CPF: 111.342.234-12</Text>
          <Text>Ag: 23434</Text>
          <Text>Conta: 07523-0</Text>
        </View>
      </View>
      <View>
        <Image style={styles.cardImage} source={require('../assets/credit-card-front.png')} />
      </View>
      <TouchableOpacity style={styles.buttonSignOut} onPress={()=> navigation.navigate('Qr')}>
        <Text style={styles.buttonSignOutText}>Scan Código de barra e Qrcode</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSignOut} onPress={()=> navigation.navigate('BarGer')}>
        <Text style={styles.buttonSignOutText}>Gerar código de barra</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImage: {
    margin: 16,
    width: 100,
    height: 100,
  },
  block: {
    margin: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  cardImage: {
    marginLeft: 16,
    borderRadius: 12,
    width: 300,
    height: 200,
  },
  buttonSignOut:{
    margin: 16,
    padding: 16,
    height: 60,
    backgroundColor: "#692ca0",
    borderRadius: 15,
  },
  buttonSignOutText: {
    color: '#ffffff',
  }
});
