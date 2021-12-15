import React,{Component} from"react" ;
import data from "../helpers/data.json"

function ElementoLista (props){
    return(
        <li>
            <a href={props.el.url} target="_blank">{props.el.name}</a>
        </li>
    );
}

export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state={
            estaciones:['Primavara','Verano','Otoño','Invierno'],
        };
    }
    render(){
        
        return(
            <div>
                <h2>Renderizado Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {
                    this.state.estaciones.map((el,index)=>
                    <li key={index}>{el}</li>)
                    }
                </ol>
                <h3>
                    Frameworks front
                </h3>
                <ul>
                    {
                        data.framworks.map((el)=>
                        <ElementoLista el={el} key={el.id}/>
                        )
                    }
                </ul>
            </div>
        );
    }
}