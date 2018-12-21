import React from 'react';
import { Text, View,Button,TextInput } from 'react-native';
import * as firebase from 'firebase';
import {styles} from './styles'
export default class App extends React.Component {
  constructor(){
    super();
    this.state = {peso:70,altura:180,imc:0,classificacao:''}
  }
  static navigationOptions = {
    title: 'Calculadora',
    headerStyle: {
        backgroundColor: '#836FFF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  };
  calcularImc(){
    const imc = this.state.peso/(this.state.altura/100)**2
    let imcClass = ''
    if (imc<=18.5){
      imcClass='Abaixo do peso...Que tal comer mais um pouco pra comemorar? ;)'
    }
    else if (imc>18.5 && imc<=24.9) {
      imcClass = 'Peso Ideal, parabéns :)'
    } 
    else if (imc>25.0 && imc<=29.9) {
      imcClass = 'Levemente acima do peso...Nada que um exercício físico não resolva'
    }
    else if (imc>30 && imc<=34.9) {
      imcClass = 'Obesidade grau um...Nada que um exercício físico e alimetação balanceada não resolvam'
    }
    else if (imc>35 && imc<=39.9) {
      imcClass = 'Obesidade grau dois...Procure um médico'
    }
    else {
      imcClass = 'Obesidade grau três...Procure um médico urgentemente'
    }
    this.setState({classificacao:imcClass,imc:imc});
    alert('Seu imc:'+imc.toFixed(2)+
          '\nSua classificação:'+imcClass);
  }
  render() {
    return (
      <View style = {[styles.container,{backgroundColor:'#B5B5B5'}]}>
        <View>
          <Text style={[styles.title,{color:'white'}]}>Seu peso</Text>
          <TextInput
            keyboardType = 'number-pad'
            style={[styles.caixaTexto,{backgroundColor:'#E0EEEE'}]}
            placeholder='Peso em Kg'
            onChangeText={(text) =>{this.setState({peso:text})}}
            
          />
          <Text style={[styles.title,{color:'white'}]}>Sua altura</Text>
          <TextInput
            keyboardType = 'number-pad'
            style={[styles.caixaTexto,{backgroundColor:'#E0EEEE'}]}
            placeholder='Altura em cm'
            onChangeText={(text) =>{this.setState({altura:text})}}
            
          />
        {/*onPress={this.calcularImc.bind(this)}*/}
        </View>
        <View style={styles.botao}>
          <Button
          title='Calcular IMC'
          color={'#836FFF'}
          onPress = {this.calcularImc.bind(this)}
          />
        </View>
{/*
  <View style={{paddingTop:50}}>
          <Text style={styles.title}>Seu imc:{this.state.imc}</Text>
          <Text style={styles.title}>{this.state.classificacao}</Text>

        </View>
*/
      }
        

      </View>
    );
  }
}
