import React from 'react';
import "./Estilos.css";
import moduleStyles from "./Estilos.module.css"
import "./Estilos.scss";

export default function Estilos (){
    let myStyles={
        borderRadius:"0.25rem",
        margin:"1rem",
        maxWidth: "50%",
    }
    return(
        <section className="estilos">
            <h2>Estilos React</h2>
            <h3 className="bg-react">Estilos en hoja Externa</h3>
            <h3 
            className="bg-react" 
            style={{borderRadius:"0.25rem",margin:"1rem"}}>Estilos en linea</h3>
            <h3 
            className="bg-react" 
            style={myStyles}>Estilos en linea por variable</h3>
            <h3>Agregando Normalize</h3>
            <br></br>
            <code>@import-normalize;</code>
            <h3 className={moduleStyles.error}>Estilos con modulos</h3>
            <h3 className={moduleStyles.success}>Estilos con modulos</h3>
            <h3 className="bg-sass">Estilos con sass</h3>
        </section>
    );
}