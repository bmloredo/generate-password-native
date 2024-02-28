import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Slider from '@react-native-community/slider';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function App() {
  const [size, setSize] = useState(20);
  const [passwordValue, setPasswordValue] = useState('');

  const generatePassword = () => {
    let password = '';

    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPasswordValue(password);
  };

  return (
    <View style={style.container}>
      <Image source={require('./assets/lock.png')} style={style.logo} />
      <Text style={style.title}>{size} caracteres</Text>
      <View style={style.areaSlider}>
        <Slider
          style={{height: 50}}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#000"
          maximumTrackTintColor="#ff0000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={value => setSize(Number(value.toFixed(0)))}
        />
      </View>

      <TouchableOpacity style={style.button} onPress={generatePassword}>
        <Text style={style.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  areaSlider: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
});
