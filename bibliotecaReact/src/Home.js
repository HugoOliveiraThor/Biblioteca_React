/**
 * Created by Hugo Oliveira on 14/04/2017.
 */
import React,{Component} from 'react';
export default class Home extends Component {
  render() {
    return (
    <div>
      <div className="header">
        <h1>Bem vindo ao sistema</h1>
      </div>
      <div className="content" id="content">
        {this.props.children}
      </div>
    </div>
    );
  }
}