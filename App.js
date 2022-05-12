import React from "react";
import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextButton placeholderText='Entrez votre texte' />
    </View>
  );
}

const TextButton = (props) => {
  const { placeholderText } = props;
  return (
    <View>
      <TextInput style={styles.textInput} placeholder={placeholderText}></TextInput>
      <TouchableOpacity style={styles.button}></TouchableOpacity>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flexDirection: 'column',
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 50,
    width: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignSelf: 'center'
  }
});