import React, {Component} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import gambar from './assets/logo.png';

const Pesan = (props) => {
  return(
    <View>
      <Text style={styleku.pesan}>{props.name}</Text>>
    </View>
  );
}

const Mahasiswa = (props) => {
  return(
    <View>
      
      <Text style={styleku.biodata}>NIM: {props.nim} {'\n'} Nama Lengkap: {props.namaDepan}{props.namaBelakang}</Text>
    </View>
  );
}
class App extends Component{
  render () {
    return (
      <View style={styleku.container}>
      <Image style={{width: 300, height: 200}} source={gambar}/>
      <Text style={styleku.pesan}>Berikut adalah Biodata Mahasiswa</Text>
      <Mahasiswa nim="0001" namaDepan="Hendi" namaBelakang="Hermawan"/>
      
      </View>
    );
  }
}
export default App;
const styleku = StyleSheet.create ({
  container: {
    backgroundColor: 'orange',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pesan : {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  biodata: {
    fontSize: 20,
    color: 'white'
  
  }
});