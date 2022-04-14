import styled from 'styled-components'

export const DivMinhaMensagem = styled.div` //styled components da msg enviada do usuario 'eu'
  display: flex;
  justify-content: end;
  align-items: right;
  border-radius: 10px ;
  padding: 0.5%;
`

export const DivConversa = styled.div` //styled component da caixa que aparecem as msgs enviadas na tela 
  background-color: #A0FAAD;
  border-radius: 10px ;
  padding: 1%;
  height: 300px;
  overflow: auto;
  margin: 3%;

`


export const DivTexto = styled.div` // caixa de texto com os inputs e botão enviar 

  background-color: #A2FAAD;
  border-radius: 10px ;
  padding: 1%;
  margin: 3%;
  
`

export const DivMensagem = styled.div` //balão que exibe a mensagem
  max-width: max-content;
  margin: 0.5%;
  background-color: #FFFFFF;
  border-radius: 10px ;
  padding: 0.5%;
`

export const MsgEnviada = styled.p` // compenente de estilo da escrita da mensagem
    border-radius: 10px ;
    color:#000000;
    background-color: #FFFFFF;  
    margin: 2px;
    word-break: break-all;
`

export const Usuario = styled.p` //componente de estilo da escrita do usuario
    display: grid;
    border-radius: 10px ;
    color:#000000;
    font-weight: bolder;
    background-color: #FFFFFF;   
    margin: 2px;
`

//css dos inputs e buttons
export const InputMsg = styled.input` 
    width: 70%;
    border-radius: 7px;
    margin: 0.5%;
`
export const InputUsuario = styled.input` 
    width: 12%;
    border-radius: 7px;
    margin: 0.5%
    
`
export const ButtonEnviar = styled.button`
    border-radius: 7px;
    margin: 0.5%;
    width: 7%;
    background-color: #00C0FA;
`






