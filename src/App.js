import './App.css';
import { Component } from 'react';

export default class Contador extends Component {
  state = {
    numero: 0
  };

  add = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  remove = () => {
    if (this.state.numero > 0) {
      this.setState({
        numero: this.state.numero - 1
      });
    }
  };

  render() {
    return (
      <div className="Contador">
        <h1 className="title">Contador Vai na Web</h1>
        <h2 className="Number">{this.state.numero}</h2>
        <button className="btn1" onClick={this.add}>
          Adicionar +
        </button>
        <button className="btn2" onClick={this.remove}>
          Remover -
        </button>
      </div>
    );
  }
}
