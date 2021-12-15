import React, {Component} from 'react'

export default class Padre extends Component{
    state={
        contador:0,
    };

    incrementarContador = (e)=> {
        this.setState({
            contador: this.state.contador+1
        })
    }

    render(){
        return(
            <div>
                <h2>Comunicacion entre componentes</h2>
                <h2>Contador: {this.state.contador}</h2>
                <Hijo mensaje="Mnesaje para el hijo 1" incrementarContador={this.incrementarContador} />
                <Hijo incrementarContador={this.incrementarContador} mensaje="Mnesaje para el hijo 2" />
            </div>
        );
    }
}

function Hijo (props){
    return(
        <fragment>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}>+</button>
        </fragment>
    );
}