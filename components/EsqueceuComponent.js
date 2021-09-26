import * as React from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const LoginComponent = ({navigation}) => {
  const [text, onChangeText] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>Insira para trocar sua senha</Text>
     
      <TextInput style={styles.field} value={text} placeholder="Digite seu Email" keyboardType="numeric" />

      <TouchableOpacity style={styles.button} onPress={()=> alert("Email enviado com sucesso !!")}>
      <Text style={styles.buttonText}>Enviar e-mail</Text>
    
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