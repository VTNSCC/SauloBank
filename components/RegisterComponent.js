import React from 'react' ;
import {Text ,View, StyleSheet , ImageBackground, TextInput, TouchableOpacity } from 'react-native';

export default class Register extends React.Component {

state={
name:'',
email:'',
number:'',
password:'',



};

submit=()=>{
const {   password, email, name} = this.state
if(password=='' || email=='' || name== '' ){
  alert("Bienvenuto Cabron ! !")
}
else{
  alert( 'you are welcome !')
}
};
render() {
    return (

      <ImageBackground source={require('../assets/Saulo.png')} style={{flex:1 , justifyContent:'center' }}>
      
      <View style={styles.container}>
        <Text style={{ fontSize: 30, color: 'white' }}>Prencha as informações:</Text>

        <TextInput
        onChangeText ={username=>this.setState({username})}
          placeholder="Name"
          style={{
            backgroundColor: '#efefef',
            padding: 10,
            width: '70%',
            marginTop: 10,
            fontSize: 18,
          }}
        />
        
        <TextInput
        onChangeText={password=>this.setState({password})}
          placeholder="Password"
          secureTextEntry={true}
          style={{
            backgroundColor: '#efefef',
            padding: 10,
            width: '70%',
            marginTop: 10,
            fontSize: 18,
          }}
        />

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.submit}
          style={{ width: '100%' }}>
          <View
            style={{
              backgroundColor: '#5f4a98',
              padding: 14,
              marginTop: 10,
              width: '50%',
              marginLeft: '5%',
            alignSelf:'center'
            }}>
            <Text style={{ textAlign: 'center', color: '#000000', fontSize: 18 }}>
            REGISTER
            </Text>
          </View>
        </TouchableOpacity>
         
              
      </View>
      
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
