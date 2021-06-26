import React, { Component } from 'react';

/*

  Este tipo de componentes manejan ciclo de vida, evento y estado

 */


class StateFul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'Hola mundo'
    }
  }
  render() {
    return (
       <h1>{this.state.hello}</h1>
    )
  }
}

export default StateFul;
