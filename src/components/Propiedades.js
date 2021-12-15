import React from "react"
import PropTypes from 'prop-types'


export default function Propiedades(props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "Ok" : "No"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre+" Correo: "+props.objeto.correo}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );
}

//Cargar propiedades por defecto
Propiedades.defaultProps={
    porDefecto : "Las props",
};

//Definir las caractristicas de las propiesades como requeirir algun elemetno
Propiedades.propTypes={
   
    numero:PropTypes.number.isRequired,
}