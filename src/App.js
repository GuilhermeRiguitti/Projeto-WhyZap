import React from 'react'

//styled components
import { ButtonEnviar,  DivConversa , DivTexto ,  InputMsg,  InputUsuario} from './components/style-components/StyledComponent';

//components
import Mensagem from './components/Mensagem';

export default class App extends React.Component { //state para renderizar na tela de acordo com o estado setado
      state = {
      inputNome: "",
      inputMsg: "",
      enviarMensagem: [] //vetor com os atributos da mensagem id, u
};

  onChangeNome = (event) => { //seta state no inputUsuario
      this.setState({inputNome: event.target.value });

  }
    
  onChangeMsg = (event) => { //seta o state no inputMsg
    this.setState({inputMsg: event.target.value});
  }

  adicionaMsg = () => { 
    //cria um vetor de msg com os valores recebidos do input e cria um ID para cada nova mensagem
    const novaMsg = {
      nome: this.state.inputNome,
      mensagem: this.state.inputMsg,
      id: Math.random()

    };
    const mensagemEnviada = [...this.state.enviarMensagem, novaMsg]; 
    this.setState({enviarMensagem: mensagemEnviada}); //vetor state enviarMensagem recebe novo state de mensagemEnviada
    
    this.setState({ //retorna para o estado vazio os inputs
      inputNome: "",
      inputMsg: ""
    });
    
  };
  removerMsg = (id) => { //falta adicionar o alert para confirma o delete
    var alert = window.confirm("Deseja excluir está mensagem?")
      if(alert===true){
        const msgs = this.state.enviarMensagem.filter((msg) => {
          return  id !== msg.id;
        });
      this.setState({enviarMensagem: msgs}); 
    }
  };


    
  envioEnter = (event) => { 
    
        if (event.code === "Enter" || event.code === "13") { //se a tecla enter de codigo 13 for acionada enviará a msg
          this.adicionaMsg();
        } 
      }
    
  render() {
    const msgMapeadas = this.state.enviarMensagem.map((msg) => {
      return (
        <Mensagem
        nome={msg.nome}
        mensagem={msg.mensagem}
        id={msg.id} 
        deletar={() => {this.removerMsg(msg.id)}}       
        />
      );
    });

  return (
    <>
       
      <DivConversa>  
        {msgMapeadas}  
      </DivConversa>
      <DivTexto>     
        <InputUsuario placeholder='Digite o usuario' onChange={this.onChangeNome} value={this.state.inputNome}/>
        <InputMsg placeholder='Digite a mensagem' onKeyPress={this.envioEnter} onChange={this.onChangeMsg} value={this.state.inputMsg}/>
        <ButtonEnviar onClick={this.adicionaMsg}>Enviar</ButtonEnviar>  
      </DivTexto>   
    </>
  
  );
}
}