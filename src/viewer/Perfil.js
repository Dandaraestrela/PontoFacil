import React from 'react';
import {View,Text,FlatList,StyleSheet,TouchableOpacity, Alert, AsyncStorage} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux'; 
import {mudaDataTexto, mudaContador} from '../store/ducks/contagem';
import ActionButton from 'react-native-action-button';
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
    containerDias: {
        height: 96,
        backgroundColor: "#dba5f7",
        flexDirection: 'row',
        padding: 5,
        margin: 6
    },
    containerCirculo: {
        flex:0.3,
        flexDirection: 'column',
        justifyContent: 'center'
        
    },
    containerTexto: {
        flex:0.7,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    estiloTexto: {
        fontSize:40,
        color:"#fff"
    },
    estiloCirculo: {
        height: 80,
        width: 80,
        backgroundColor: "#fff",
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    estiloTextoCirculo: {
        fontSize:25,
        color:"#0277BD"
    }
});

class Perfil extends React.Component{
    state = {dialogVisible: false, 
             nomeNovoFunc: '',
             contaId: 4,
             dias: [{texto: "Joana", id: '1'},
             {texto: "Carla", id: '2'},
             {texto: "Dandara", id: '3'},
             {texto: "Arnor", id: '4'}],
            }; 

        showDialog = () => {
            this.setState({ dialogVisible: true });
        };
        
        handleCancel = () => {
            this.setState({ dialogVisible: false });
        };
        
        handleAdicionar = () => {
            this.setState.contaId = this.state.contaId + 1;
            var idString = "" + this.setState.contaId;
           var newArray = this.state.dias.slice();    
           newArray.push({texto: this.state.nomeNovoFunc, id: idString});   
           this.setState({dias:newArray});
           this.setState({ dialogVisible: false });
        };          

    static navigationOptions = {
        tabBarLabel: 'Funcionários',
        tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name={'checkbox-marked-outline'} size={25} color={tintColor} />
        ),
      };
    


// recebe uma data e retorna o dia de acordo com a data
/*dataToDia(data) {
    switch(data) {
        case "11/02":
            return '1';
        case "12/02":
            return '2';
        case "13/02":
            return '3';
        case "14/02":
            return '4';
        case "15/02":
            return '5';
    }
}*/

/*async chamaContagem(data,nome){
    // Antes de chamar a tela de Contagem precisamos carregar qual a quantidade de check-in de acordo com a data selecionada
    const diaNumero = this.dataToDia(data); // transforma data para dia (1,2,3,4,5)
    //@--
    this.props.mudaDataTexto(data,nome); 

    // carrega, se existir, o contador correspondendo ao dia selecionado
    let contador = await AsyncStorage.getItem(CONTADOR_STORAGE_KEY.concat('#').concat(diaNumero));
    // teste se existe algum check-in no dia selecionado
    if(contador !== null){
        // modifica o contador de contagem.js (no store do redux)
        this.props.mudaContador(contador);
    }else{
        this.props.mudaContador('0');
    }
    // na tela de Contagem o valor do contador já estará atualizado, passa a variavel diaNumero para a tela de contagem
    this.props.navigation.navigate('Contagem', { diaNumero }); 
}*/

    render(){

        return(
            <View style={styles.container}>
                <FlatList 
                    //identificador de cada elemento
                    data={this.state.dias}                    
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
  
                        <TouchableOpacity style={styles.containerDias} onPress={() => this.props.navigation.navigate('Funcionario')}>
                            <View style={styles.containerTexto}>
                                <Text style={styles.estiloTexto}>
                                    {item.texto}
                                </Text>    
                            </View>    
                        </TouchableOpacity>
                    )}
                />         
            <ActionButton buttonColor= "rgba(175, 32, 249, 1)" onPress={() => this.showDialog() } renderIcon={() => <MaterialCommunityIcons name="account-plus" color="#fff" size={30}/> }  >

            </ActionButton>
            <Dialog.Container visible={this.state.dialogVisible}>
                    <Dialog.Title>Adicionar funcionário</Dialog.Title>
                    <Dialog.Input label = "Nome do novo funcionário:" onChangeText={(nomeNovoFunc) => this.setState({nomeNovoFunc})}></Dialog.Input>
                    <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                    <Dialog.Button label="Adicionar" onPress={this.handleAdicionar} />
            </Dialog.Container>  

            </View>    
        );
    }

}

//os parametros são: o estado e as funções
export default connect(null,{mudaDataTexto, mudaContador})(Perfil);

{/*() => arrow function, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
seta significa retorno, poderia ser substituido por () { return this.notificacao() }   */}  