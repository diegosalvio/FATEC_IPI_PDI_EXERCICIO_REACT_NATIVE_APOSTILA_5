import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const[contato, setContato] = useState({
    nome: '',
    telefone: ''
  });

  const [contatos, setContatos] = useState([{}]);

  const [contadorContatos, setContadorContatos] = useState(0);

  const capturarNome = (nomeDigitado) => {
    setContato(nomeDigitado);
  }

  const capturarTelefone = (telefoneDigitado) => {
    setContato({
      telefone: telefoneDigitado
    });
  }

  const adicionarContato = () => {
    setContatos(contatos => {
      setContadorContatos(contadorContatos + 1)
      return [{key: contadorContatos.toString(), value: contato}, ...contatos]
    })
  }



  return (
    <View style={styles.telaPrincipal}>
      <View>
        <TextInput
          maxLength='100'
          onChangeText={capturarNome}
          /* value={contato.nome} */

          placeholder='Digite o nome do contato'
        >
        </TextInput>
        <TextInput
          style={styles.textInput}
          maxLength='100'
          onChangeText={capturarTelefone}
          /* value={contato.telefone} */

          placeholder='Digite o telefone do contato'
          >
        </TextInput>
        <Button
          title='Add Contato'
          onPress={(s)=>{
            adicionarContato();
          }}></Button>
      </View>
      <FlatList
        data={contatos}
        renderItem={
          c => {
            <View
              style={styles.flatList}>
                <Text>{c.item.value}</Text>
            </View>
          }
        }/>

    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipal: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderBottomColor: 'black',
    borderbottomWidth: 1,
    marginBottom: 8,
    padding: 12
  },
  flatList: {
    padding: 12,
    backgroundColor: '#die',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8
  }
});
