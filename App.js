import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, TextInput, TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'


export default function App(){
   const [sexo, setSexo] = useState(0)
   const [credito, setCredito] = useState(200)
   const [ estudante, setEstudante ] = useState(false)

   const [ nome, setNome ] = useState ('')
   const [ idade, setIdade ] = useState ('')


   function abrir(){

    alert("SEU NOME É: " + nome + ", SUA IDADE É DE:  "+ idade+ ", SEU GENERO É: "+ sexo+ ", VOCÊ É: "+ (estudante ? 'ESTUDANTE' : 'NÃO ESTUDANTE')+ ", SEU CREDITO É DE: "+ credito.toFixed(2) ) 
 
   }

    return(
      <View style={styles.telatoda} >

      <View style={styles.emcima} >
      <Text style={styles.titulo} > #BANCO ESTRELA  </Text>
      </View>


      <View style={styles.meio}>
 

        <View style={styles.containerNome} >
           <Text style={styles.nome} >NOME:  </Text>
        <TextInput style={styles.inputNome} 
        placeholder='Digite seu nome: '
        onChangeText={(texto) => setNome(texto) }
        />
        </View>
      

        <View style={styles.containerIdade} >

        <Text style={styles.idade} >IDADE:  </Text>
        <TextInput style={styles.inputIdade}
         placeholder='Digite sua idade: '
        onChangeText={(texto)=> setIdade(texto) }
        keyboardType = "numeric"
        />

        </View>
      

       <View style={styles.picker} > 

         <Picker
        selectedValue={sexo}
        onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>

            <Picker.Item key={0} value={0} label="SELECIONE O SEXO"/>
            <Picker.Item key={1} value={"FEMININO"} label="FEMININO"/>
            <Picker.Item key={2} value={'MASCULINO'} label="MASCULINO"/>

        </Picker>

       </View>
        

         <View style={styles.slider}  >

          <Text style={styles.textoLimite} > LIMITE DESEJADO </Text>

           <Slider
        minimumValue={200}
        maximumValue={2500}
        minimumTrackTintColor='black'
        maximumTrackTintColor='green'
        thumbTintColor='black'
        value={credito}
        onValueChange={ (valor) => setCredito(valor) }
        />
          <Text style={styles.textoCredito} > R$: {credito.toFixed(2)} </Text>
      
         </View>
        
        <View style={styles.switch}>


          <Switch
          value={estudante}
          onValueChange={ (valor) => setEstudante(valor) }
          trackColor={{false: "black", true: 'black'}}
          thumbColor={"#232323"}

          />
            <Text style={styles.textoEstudante} >{estudante ? 'ESTUDANTE' : 'NÃO ESTUDANTE'}</Text> 

        </View>

        <View style={styles.botao} >
            
            <TouchableOpacity onPress={abrir}  >
             <Text style={styles.textoBotao} > ABRIR CONTA </Text>
            </TouchableOpacity>

        </View>

        

      </View>


      <View style={styles.baixo}></View>

     

      </View>
    )
}

const styles = StyleSheet.create({
    telatoda:{
      flex: 1,
      backgroundColor: 'black',
      
    },
    emcima:{
      height: 70,
      backgroundColor:'black'
    },
    meio:{
        flex: 1,
        backgroundColor: 'green',
        padding: 15,
        paddingTop: 1,
        borderRadius: 50,
        margin: 15,
       
    },
    baixo:{
      marginTop: 5,
      height: 40,
      backgroundColor: 'black',
     
    },
    titulo:{
      fontSize: 35,
      color: '#FFF',
      textAlign: 'center',
      marginTop: 20,
      fontFamily: "Cochin"
    },
    inputNome:{
      width: 330,
      borderRadius: 50,
      height: 40,
      borderWidth: 1,
      left: 10
      
    },
    nome:{
      fontSize: 20,
      color: 'black',
      left: 30
      
    },
    containerNome:{
      marginTop: 20,
      backgroundColor: '#FFF',
      borderRadius: 25,
      height: 80
    },
    idade:{
      fontSize: 20,
      color: 'black',
      left: 30
      
    },
    inputIdade:{
      width: 330,
      borderRadius: 50,
      height: 40,
      borderWidth: 1,
      left: 10
      
    },
    containerIdade:{
      marginTop: 20,
      backgroundColor: '#FFF',
      borderRadius: 25,
      height: 80
    },

    slider:{
     marginTop: 20,
     backgroundColor: '#FFF',
     borderRadius: 25,
     height: 80
    },
    textoLimite:{
      textAlign: 'center',
      color: 'black',
      fontSize: 17,
      marginBottom: 6
    },
    picker:{
      backgroundColor: '#FFF',
      borderRadius: 20,
      marginTop: 15
    },
    textoCredito:{
      color: 'black',
      textAlign: 'center',
      fontSize: 20
    },
    switch:{
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginTop: 15
    },
    textoEstudante:{
      position: 'absolute',
      fontSize: 18,
      color: 'black',
      left: 109
    },
    botao:{
      backgroundColor: '#eeb',
      borderRadius: 15,
      marginTop: 15,
      width: 115,
      height: 40,
      justifyContent: 'center',
      left: 122,
      top: 25,
    },
    textoBotao:{
      fontSize: 16,
      color: 'black',
      
    }
    
    
})