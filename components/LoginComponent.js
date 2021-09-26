import * as React from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const LoginComponent = ({navigation}) => {
  const [text, onChangeText] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>Bem-vindos!!!</Text>
      <Text style={styles.subtitle}>Faça seu Login:</Text>
      <TextInput style={styles.field} value={text} placeholder="Digite seu Email" keyboardType="numeric" />
      <TextInput style={styles.field} value={password} placeholder="Digite sua senha" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Fazer o login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Register')}>
      <Text style={styles.buttonText}>Registrar-se</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Esqueceu')}>
      <Text style={styles.buttonText}>Esqueceu?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default LoginComponent;


const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 16,
    paddingTop: 50,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3b3b3b',
  },
  subtitle: {
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#3b3b3b',
  },
  field: {
    marginHorizontal: 16,
    paddingHorizontal: 16,
    margin: 10,
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#3b3b3b',
    fontSize: 16,
  },
  button: {
    margin: 16,
    padding: 16,
    height: 60,
    backgroundColor: "#692ca0",
    borderRadius: 15,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: 'bold',
  }
})