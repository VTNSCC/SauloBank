import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Home from './screens/Home';
import Qr from './screens/Qr';
import BarGer from './screens/BarGer';
import Register from './screens/Register';
import Esqueceu from './screens/Esqueceu';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#5f4a98"
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: '{S}aulOBank',
              headerStyle: {
                backgroundColor: '#ffffff',
              },
              headerTintColor: '#5f4a98',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: '#692ca0',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Qr"
            component={Qr}
            options={{
              title: 'Qr',
              headerStyle: {
                backgroundColor: '#692ca0',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="BarGer"
            component={BarGer}
            options={{
              title: 'Cód Barras',
              headerStyle: {
                backgroundColor: '#692ca0',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: 'Register',
              headerStyle: {
                backgroundColor: '#692ca0',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Esqueceu"
            component={Esqueceu}
            options={{
              title: 'Esqueceu',
              headerStyle: {
                backgroundColor: '#692ca0',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
