import * as React from 'react';
import { SafeAreaView } from 'react-native';
import RegisterComponent from '../components/RegisterComponent';

const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RegisterComponent navigation={navigation} />
    </SafeAreaView>
  );
};

export default Register;