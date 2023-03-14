import React from "react";
import { View, Text, KeyboardAvoidingView, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image } from "react-native";

export default function App(){
  return(
    <KeyboardAvoidingView style={{flex: 1}}>
      <ImageBackground source={require("../../assets/backgroundLogin.png")} style={styles.container}>
        <Image source={require("../../assets/logo.png")} style={styles.image}/>
        <View style={styles.inputContainer}> 
          <TextInput 
          placeholder="nome de usuário"
          style={styles.inputStyle}/>
          <TextInput
          placeholder="senha"
          style={styles.inputStyle}/>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={{...styles.buttonStyle, backgroundColor: '#FFD26F'}}>
            <Text style={styles.buttonText}>Logar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.buttonStyle, backgroundColor: ''}}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  image:{
    height: 250,
    width: 250
  },
  inputContainer:{
    width: '100%',
    alignItems: 'center',
    gap: 10
  },
  inputStyle:{
    backgroundColor: '#fff',
    width: '60%',
    height: 40,
    borderRadius: 5
  },
  buttonsContainer:{
    alignItems: 'center',
    gap: 20,
    width: '100%',
  },
  buttonStyle:{
    borderRadius: 5,
    alignItems: 'center',
    width: '30%'
  },
  buttonText:{
    padding: 12,
    fontWeight: '700'
  }
})