import React,{ useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {

    const [numero,setNumero] = useState(0);
    const [botao, setBotao] = useState('Vai');
    const [ultimo, setUltimo] = useState (null);
 

    function vai(){
        if(timer !== null){

          clearInterval(timer);
          timer = null
      
          setBotao('Vai');
        }else {
          timer = setInterval(() =>{
            ss++;
            
            if(ss == 60){
              ss=0;
              mm++;
            }

            if(mm == 60){
              m=0;
              hh++;
            }


            let format = 
            (hh< 10 ? '0' + hh : hh) + ':'
             +(mm< 10 ? '0' + mm : mm) + ':'
              +(ss< 10 ? '0' + ss : ss);
            

              setNumero(format);

          }, 1000);
          setBotao('Parar')
        }

    }
  
    function clear(){
      if(timer !== null){
        clearInterval(timer);
        timer=null;

      }
      setUltimo(numero);
      setNumero(0);
      ss= 0;
      mm= 0;
      hh= 0;

      setBotao('Vai')
    }  
  
  
  
  return (
    <View style={styles.container}>
      <Image
      source={require('./src/crono.png')}
      />
     <Text style={styles.timer}>{numero}</Text>
     
     <View style={styles.btnArea}>
       <TouchableOpacity style={styles.btn} onPress={vai}>
        <Text style={styles.btnTexto}> {botao}</Text>
       </TouchableOpacity>


     
       <TouchableOpacity style={styles.btn}onPress={clear}>
        <Text style={styles.btnTexto}>Limpar</Text>
       </TouchableOpacity>
     </View>


     <View style={styles.areaUltima}>
      <Text style={styles.textoTempo}>
       {ultimo ? 'ultimo tempo:' + ultimo :''}
      </Text>
     </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer:{
    marginTop: -160,
    fontSize:45,
    fontWeight:'bold',
    color:'#fff'
  },
  btnArea:{
    flexDirection:'row',
    marginTop:130,
    height:40,
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    height:40,
    margin:17,
    borderRadius:9
  },
  btnTexto:{
    fontSize:20,
    fontWeight:'bold',
    color:'#00aeef'
  },
  areaUltima:{
    marginTop:40,
  },
  textoTempo:{
    fontSize:25,
    color:'#fff',
    fontStyle:'italic'
  }


});













