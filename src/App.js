import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import "./App.css";
import RednderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import Padre from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/ComponentesEstilizados";

function App() {
  let auth = true;
  let nombre = "jorge";
  let estaciones = ["Primavera", "vreano", "inv"];
  return (
    <div className="App">
      <header className="App-header">
        <section>
          {/*<img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>{nombre}</h1>
          <p>
            {auth ? "El usuario esta logueado" : "El usuario no esta loguedo"}
          </p>
          <p>{2 + 1}</p>
          <ul>
            {estaciones.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola soy un componente desde una prop arrow func" />
          <hr />
          <Propiedades
            cadena="CHiken litle"
            numero={20}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Cuquin", correo: "cuquin@gmail.com" }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemto react</i>}
            componenteReact={
              <Componente msg="Soy un compoente pasado como prop" />
            }
          />

          <hr />
          <Estado />
          <hr />
          <RednderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />

          <hr />
          <Padre />
          <hr />
          <CicloVida />
          <hr />
          <AjaxApis />
          <hr />
          <ContadorHooks titulo="seguidores" />
          <hr />
          <ScrollHooks />
          <hr />
          <RelojHooks />
          <hr />
          <AjaxHooks />
          <hr />
          <HooksPersonalizados />
          <hr/>
          <Referencias/> 
          <hr/> 
          <Formularios/>

          <hr/>
          <Estilos/> */}
          <ComponentesEstilizados/>
        </section>
      </header>
    </div>
  );
}

export default App;
