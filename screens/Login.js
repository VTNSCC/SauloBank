import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import LoginComponent from '../components/LoginComponent';

const Login = ({ navigation }) => {
  return (
    <SafeAreaView>
    <View style={{flex: 1}}>
      <LoginComponent navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
