import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const [contato, setContato] = useState({})

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
      return [{key: contadorContatos.toString(), value: nome, value: telefone}, ...contatos]
      
    })
    console.log(contatos);
  }
  

  return (
    <View style={styles.telaPrincipal}>
      <View>
        <TextInput
          style={styles.textInput}
          maxLength='50'
          onChangeText={capturarNome}
          value={nome}

          placeholder='Digite o nome do contato'
        />
        <TextInput
          style={styles.textInput}
          maxLength='50'
          onChangeText={capturarTelefone}
          value={telefone}

          placeholder='Digite o telefone do contato'
          />
        <Button
          title='Add Contato'
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
                <Text>
                  {c.item.contato}
                </Text>
            </View>
          )
        }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipal: {
    padding: 40,
  },
  textInput: {
    borderBottomColor: 'black',
    borderbottomWidth: 1,
    marginBottom: 8,
    padding: 12
  },
  flatList: {
    padding: 12,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8
  }
});
