import {AsyncStorage} from "react-native";


//tipos actions 
const Types={
    //deve expecificar a duck
        MODIFICA_NOME: "contagem/MODIFICA_NOME",
    };

    const ESTADO_INICIAL={
        nome:"",
        frequencia: [],
    };

//reducer
//atualiza os dados quando o action dispara
//spread (...) passa os atributos de um objeto para outro, e atualiza os atributos iguais
export default function reducer(state=ESTADO_INICIAL,action){
    switch(action.type){
        case Types.MODIFICA_NOME: 
            return {
                ...state,
                data:action.payload.nome, 
            }   
        default: return state
    }

}

//actions
//payload são os dados passados
//action dispara o reducer 
export function mudaNome(data,texto){
    return {
        type: Types.MODIFICA_NOME, payload:{nome}}
}
//isso era p so por o nome lá em cima
export function organiza(novoDia, novoHorario){
    

}

export default funcionario;