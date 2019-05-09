import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CalendarList} from 'react-native-calendars';
import ActionButton from 'react-native-action-button';
import Dialog from "react-native-dialog";
class Inicial extends React.Component{

    state = {
        nomeEmpresa: "Aviamentos e companhia"
    }

    showDialog = () => {
        this.setState({ dialogVisible: true });
    };
    
    
    handleModificar = () => {
       this.setState({ dialogVisible: false });
    };

    static navigationOptions = {
        tabBarLabel: 'Inicial',
        tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name={'calendar-multiselect'} size={25} color={tintColor} />
        ),
      };

    render(){
    
        return (
            <View>
            <TouchableOpacity onPress={() => this.showDialog()}>
                            <View>
                                <Text style={{fontSize: 21, fontWeight: 'bold', textAlign: 'center'}}>
                                Informações da empresa: {"\n"}
                {this.state.nomeEmpresa}
                {"\n"} {"\n"}
                                </Text>    
                            </View>    
                        </TouchableOpacity>   
            <CalendarList
                // Enable horizontal scrolling, default = false
                horizontal={true}
                // Enable paging on horizontal, default = false
                pagingEnabled={true}
                // Set custom calendarWidth.
                calendarWidth={475}
/>

    <Dialog.Container visible={this.state.dialogVisible}>
    <Dialog.Title>Digite o nome da sua empresa</Dialog.Title>
    <Dialog.Input label = "Nome" onChangeText={(nomeEmpresa) => this.setState({nomeEmpresa})}></Dialog.Input>
    <Dialog.Button label="Modificar" onPress={this.handleModificar} />
    </Dialog.Container>
            </View>      
        );
    }     

}

//serve para os outros arquivos enxergarem esse arquivo
//exportou em default pq só tá compartilhando uma coisa nesse caso, uma classe
export default Inicial;



