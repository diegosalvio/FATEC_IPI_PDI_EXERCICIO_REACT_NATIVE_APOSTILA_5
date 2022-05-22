import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native'
import React,  { useState } from 'react'

const NovoContatoTela = () => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
  
  
    const [contatos, setContatos] = useState([]);
  
    const [contadorContatos, setContadorContatos] = useState(0);
  
    const capturarNome = (nomeDigitado) => {
      setNome(nomeDigitado);
    }
    const capturarTelefone = (telefoneDigitado) => {
      setTelefone(telefoneDigitado);
    }
  
    const adicionarContato = () => {
      setContatos(contatos => {
        setContadorContatos(contadorContatos + 1);
        return [{key: contadorContatos.toString(), nome: nome, telefone: telefone}, ...contatos]
        
      })
      console.log(contatos);
    }
    
  
    return (
      <View style={styles.telaPrincipal}>
        <View>
          <TextInput
            name='nome'
            style={styles.textInput}
            maxLength='50'
            onChangeText={capturarNome}
            value={nome}
  
            placeholder='Digite o nome'
          />
          <TextInput
            name='telefone'
            style={styles.textInput}
            maxLength='50'
            onChangeText={capturarTelefone}
            value={telefone}
  
            placeholder='Digite o telefone'
            />
          <Button
            title='Add Contato'
            color='pink'
            onPress={(s)=>{
              adicionarContato();
              setNome('');
              setTelefone('');
            }}/>
        </View>
        <FlatList
          data={contatos}
          renderItem={
            c => (
              <View
                style={styles.flatList}>
                  <Text style={styles.cardHeader} >
                    CONTATO
                  </Text>
                  <Text style={styles.cardNome}>
                    Nome: {c.item.nome}
                  </Text>
                  <Text style={styles.cardTelefone}>
                    Telefone: {c.item.telefone}
                  </Text>
              </View>
            )
          }
          />
      </View>
    );
}

export default NovoContatoTela;

const styles = StyleSheet.create({
    telaPrincipal: {
        padding: 40,
        flexDirection: 'row',
        
      },
      textInput: {
        borderBottomColor: 'black',
        borderbottomWidth: 1,
        marginBottom: 8,
        padding: 12
      },
      flatList: {
        marginLeft: 30,
        padding: 12,
        backgroundColor: 'pink',
        borderColor: 'yellow',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 8,
      },
      cardHeader: {
        fontSize: 16, 
        fontWeight: 'bold'
      },
      cardNome: {
        padding: 6,
        fontSize: 14
      },
      cardTelefone: {
        padding: 6,
        fontSize: 12
      } 
})