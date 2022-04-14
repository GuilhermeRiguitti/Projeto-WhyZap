import React from 'react'
import { DivMensagem, Usuario, MsgEnviada, DivMinhaMensagem } from './style-components/StyledComponent';
const Mensagem = (props) => { //component mensagem passada por props para o app.js
    if(props.nome.toUpperCase() === 'EU' ) { //se a mensagem for enviada pelo usuario eu irá para o lado direito 
    return (
        <DivMinhaMensagem> 
            <DivMensagem onDoubleClick={props.deletar}>
                <MsgEnviada>
                    {props.mensagem}
                </MsgEnviada>
            </DivMensagem>
        </DivMinhaMensagem>
    )
    }else{ //se nao renderiza normal no lado esquerdo
        return (
            <DivMensagem onDoubleClick={props.deletar}>
                <Usuario >
                    {props.nome}
                </Usuario>
                <MsgEnviada>
                    {props.mensagem}
                </MsgEnviada>
            </DivMensagem>
        )
        
    }  
}
     
export default Mensagem;
