import React,{Component} from 'react'

class Reloj extends Component{
    constructor(props){
        super(props); 
        console.log();
    }
    render(){
        return(
            <h3>{this.props.hora}</h3>
        );
    }

    componentWillUnmount(){
        console.log(3,"El componente ha sido eliminado del DOM");
    }
}

export default class CicloVida extends Component{

    constructor(props){
        super(props);
        console.log(0,"El componente se inicializa, aun NO esta en el DOM")

        this.state={
            hora:new Date().toLocaleTimeString(),
            visible:false
        };

        this.temporizador=null;
    }

    componentDidMount(){
        console.log(1,"El componete esta en el DOM");
    }

    componentDidUpdate(prevPorps,prevState){
        console.log(2,"El estado o las props del componente han cambiado");
        console.log(prevPorps)
        console.log(prevState)
    }

    

    tictac=()=>{
        this.temporizador=setInterval(()=>{
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        },1000);

    }

    iniciar = () => {
        this.tictac();
        this.setState({
            visible:true
        })
    }

    detener = () => {
        clearInterval(this.temporizador);
        this.setState({
            visible:false
        })
    }



    render(){
        console.log(4,"El componente se dibujo o redibuja por un cambio en el DOM")
        return(
            <div>
                <h2>Ciclo de Vida</h2>
                {this.state.visible &&<Reloj hora={this.state.hora}></Reloj>}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Parar</button>
                
            </div>
            
        );
    }
}