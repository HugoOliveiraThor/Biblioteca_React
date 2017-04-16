import React, {Component} from 'react';
import PubSub from 'pubsub-js';


export default class SelectCustomizado  extends Component{
  constructor() {
    super();
    this.state = {msgErro: ''};
  }
  render(){
    return(
      <select value={this.state.autorId} name="autorId" onChange={this.setAutorId}>
        <option value="">Selecione</option>
        {
          this.props.autores.map(function (autor) {
            return <option key={autor.id} value={autor.id}>{autor.nome}</option>;
          })
        }
      </select>
    );
  }
}