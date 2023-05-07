import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {

    const [impressao, setImpressao] = useState("")

    const [img, setImg] = useState (0)

    function quebrar(){
        if(img==0){
          let numAleatorio = Math.floor(Math.random() * frases.length);
          setImpressao(frases[numAleatorio])
          setImg(1)
        }
    }

    function novo(){
        setImpressao(frases[""])
        setImg(0)
    }

    function exibirImg(numero){
        if(numero==0){
          return(<Image source={require('./assets/novo.jpg')}style={styles.img}/>)
        }else{ 
            return(<Image source={require('./assets/quebrado.jpg')}style={styles.img}/>)
        }
    }
 
    const frases =[
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distancia entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbivio, passe no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não depende deles.',
      'A maior barreira para o sucesso é o medo do fracasso' 
    ];
 
  return (
    <View style={styles.container}>
      <View style={{ flex:2, justifyContent:'center', width:'100%', alignItems:'center'}}>
        {exibirImg(img)}
      </View>
        <View style={{ flex:2, justifyContent:'center', width:'100%', alignItems:'center'}}>
          <Text style={styles.textoFrase}>{impressao}</Text>
        </View>
          <View style={{ flex:2, justifyContent:'center', width:'100%', alignItems:'center'}}>
           <TouchableOpacity style={styles.botao} onPress={()=>quebrar()}> 
              <View style={styles.bntArea}>
                <Text style={styles.btnTexto}>Quebrar biscoito</Text>
               </View>
            </TouchableOpacity>
             <TouchableOpacity style={styles.botao} onPress={()=>novo()}>
                <View style={styles.bntArea}>
                  <Text style={styles.btnTexto}>Nvov biscoito</Text>
                </View>
              </TouchableOpacity>
          </View>
     </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    height: 250,
    width:250,     
  },
  textoFrase:{
    fontSize:20,
    color:'#dd7b22',
    margin:30, 
    fontStyle:'italic',
    textAlign:'center',  
  },
  botao:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor:'#dd7b22',
    borderRadius:25,
    margin:10
  },
  bntArea:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  btnTexto:{
    color:'#dd7b22',
    fontSize:18,
    fontWeight: 'bold',
  },
});
