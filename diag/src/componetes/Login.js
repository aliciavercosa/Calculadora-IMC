import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,ScrollView } from 'react-native';
import * as firebase from 'firebase';
import {styles} from './styles'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {nome:'',senha:''}
  }
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
        backgroundColor: '#836FFF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  };
  entrar(){
    firebase.auth().signInWithEmailAndPassword(this.state.nome, this.state.senha).then(() =>{
      alert('usuário logado!');
      this.props.navigation.navigate('home');
    }).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      alert(errorMessage);
    });
  }
  cadastrar(){
    firebase.auth().createUserWithEmailAndPassword(this.state.nome, this.state.senha)
    .then( () => {
      alert("Cadastro realizado com sucesso!!Tente entrar agora. :)")
    })
    .catch(function(error) {
      
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Erro ao cadastrar usuário! Por favor tente novamente.'+errorMessage)
      
    });
    
  }
  esconder(tamanho){
    let asterisco = '' 
    for (let i=0; i<tamanho;i++){
      asterisco += '*'
    }
    return asterisco;
  }
  render() {
    return (
      
      <ScrollView style = {[styles.container,{backgroundColor:'#B5B5B5',height:'200%'}]}>
        
          <View>
              <Text style={styles.logo}>IMC</Text>
          </View>
          <View>
              <Text style={[styles.title,{color:'white'}]}>Nome de usuário:</Text>
              <TextInput 
              style={styles.caixaTexto}
              placeholder="Login" 
              onChangeText={
                  (texto) =>{ this.setState({nome:texto})}
                  }/>
              <Text style={[styles.title,{color:'white'}]}>Senha:</Text>
              <TextInput 
              style={styles.caixaTexto}
              placeholder="Senha" 
              keyboardType='visible-password'
              
              onChangeText={
                  (texto) =>{ this.setState({senha:texto})}
                }
                value ={this.esconder(this.state.senha.length)}
                />
          </View>
          <View style={{}}>
            <View style={styles.botao}>    
              <Button title='entrar' 
                color={'#836FFF'}
                onPress={this.entrar.bind(this)}/>
            </View>
            <View style={styles.botao}>
              <Button title='cadastre-se!'
              color={'#836FFF'}
              onPress={this.cadastrar.bind(this)}/>
            </View>
          </View>
        </ScrollView>
      
        
    );
  }
}
