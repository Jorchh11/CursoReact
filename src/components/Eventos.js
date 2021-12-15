import React, {Component} from 'react'

export  class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state={
            contador:0,
        };
//simepre hacen bind en eventos tipo clase
        this.sumar=this.sumar.bind(this);
        this.restar=this.restar.bind(this);

    }

    sumar(e){
        console.log(this)
        this.setState({
            contador:this.state.contador+1,
        });

    }
    restar(e){
        console.log(this)
        this.setState({
            contador:this.state.contador-1,
        });

    }
    render(){
        return(
            <div>
                <h2>Elementos de Componestes de clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
                
            </div>
        );
    }

}
//Properties Initialzaer
export  class EventosES7 extends Component{
    
    state={
        contador:0,
    };
    //Arrow function nhereda el contexto de la clase a la que pertenece

    sumar= (e) =>{
        console.log(this)
        this.setState({
            contador:this.state.contador+1,
        });

    }
    restar = (e) =>{
        console.log(this)
        this.setState({
            contador:this.state.contador-1,
        });

    }
    render(){
        return(
            <div>
                <h2>Elementos de Componestes de clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
                
            </div>
        );
    }

}

/*function  Boton (props){
    return (
        <button onClick={props.myOnClick}>Boton hecho componente</button>
    );
}*/

/*const Boton= (props) => (
    <button onClick={props.myOnClick}>Boton hecho componente</button>
);*/

const Boton = ({myOnClick}) =>(
    <button onClick={myOnClick}>Boton hecho componente</button>
);

//eventos nativos,sinteticos y personalizados

export class MasSobreEventos extends Component{

    handleClick = (e,msg) => {
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(msg);
    }

    render(){
        return(
            <div>
                <h2>Mas sobre evnetos</h2>
                <button onClick={(e)=>this.handleClick(e,"Hola pasando paramtro desde un entento")}>Saludar</button>

                {/* Evento Perosnalizado */}
                <Boton myOnClick={(e)=>this.handleClick(e,"Hola pasando paramtro desde un entento")}></Boton>
            </div>
        )
        ;
    }
}