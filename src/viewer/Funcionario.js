import React, { Component } from 'react';
import { AppRegistry, View, TextInput, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dialog from "react-native-dialog";

const styles = StyleSheet.create({
  container: {
      //flex serve para definir o tamanho da forma e 1 é a tela inteira 
      flex: 1, 
      backgroundColor: "#fff",
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: 16
  }, 
  containerTexto: {
    flex:0.7,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
},
estiloTexto: {
  fontSize:30,
  color:"#826dc4"
}});

class Funcionario extends React.Component{
  state = {
           frequencia: [{dia: "Dias", horario: "Horario"}],
           novoDia: '',
           novoHorario: ''
          }; 

        showDialog = () => {
            this.setState({ dialogVisible: true });
        };
        
        handleCancel = () => {
            this.setState({ dialogVisible: false });
        };
        
        handleAdicionar = () => {
           var newArray = this.state.frequencia.slice();    
           newArray.push({dia: this.state.novoDia, horario: this.state.novoHorario});   
           this.setState({frequencia:newArray});
           this.setState({ dialogVisible: false });
        };

render(){
  return(
    <View style={styles.container}>
    
    <FlatList 
        //identificador de cada elemento
        data={this.state.frequencia}                    
        keyExtractor={item => item.dia}
        renderItem={({item}) => (

            <TouchableOpacity style={styles.containerDias}>
                <View style={styles.containerTexto}>
                    <Text style={styles.estiloTexto}>
                        {item.dia}
                            {"  ---  "}
                        {item.horario}
                    </Text>    
                </View>    
            </TouchableOpacity>
        )}
    /> 
    <ActionButton buttonColor= "rgba(175, 32, 249, 1)" onPress={() => this.showDialog()}renderIcon={() => <MaterialCommunityIcons name="account-plus" color="#fff" size={30}/> }  >
    </ActionButton>
    <Dialog.Container visible={this.state.dialogVisible}>
    <Dialog.Title>Adicionar frequencia</Dialog.Title>
    <Dialog.Input label = "Dia" onChangeText={(novoDia) => this.setState({novoDia})}></Dialog.Input>
    <Dialog.Input label = "Horario" onChangeText={(novoHorario) => this.setState({novoHorario})}></Dialog.Input>
    <Dialog.Button label="Cancel" onPress={this.handleCancel} />
    <Dialog.Button label="Adicionar" onPress={this.handleAdicionar} />
    </Dialog.Container>

    </View>
  )
}
}



export default Funcionario;


/*import React, { Component } from 'react';
import { AppRegistry, View, TextInput, Text} from 'react-native';
import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class FuncionarioText extends Component {
  render() {
    return (
    
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {40}
      />
    );
  }
}

class Funcionario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
     <View style={{
       backgroundColor: this.state.text,
       borderBottomColor: '#000000',
       borderBottomWidth: 1 }}
     >

   
       <FuncionarioText
         multiline = {true}
         numberOfLines = {4}
         placeholder="Nome do funcionario"
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
       />
        <Text style={{padding: 10, fontSize: 42}}>
        {this.state.text}
        </Text>
        <ActionButton buttonColor= "rgba(175, 32, 249, 1)" onPress={() => this.props.navigation.navigate('Funcionario') } renderIcon={() => <MaterialCommunityIcons name="account-plus" color="#fff" size={30}/> }  >

        </ActionButton> 
     </View>
    );
  }
}

export default Funcionario;*/