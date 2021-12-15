import React, { useState } from 'react';

export default function Formularios() {
    /* const [nombre, setNombre] = useState("");
     const [sabor, setSabor] = useState("");
     const [lenguaje, setLenguaje] = useState("");
     const [terminos, setTerminos] = useState(false);
 
     const handleSubmit = (e)=> {
         e.preventDefault();
         alert("El formulario se ha enviado");
     };
     return(
         <>
             <h2>Formularios</h2>
             <form onSubmit={handleSubmit}>
                 <label htmlFor="nombre">Nombre:</label>
                 <input 
                 type="text" 
                 id="nombre" 
                 name="nombre" 
                 value={nombre}
                 onChange={(e) => setNombre(e.target.value)}
                 />
 
                 <p>Elige tu sabor js favorito</p>
 
                 <input 
                 type="radio" 
                 id="vanilla" 
                 name="sabor" 
                 value="vanilla" 
                 onChange={(e) => setSabor(e.target.value)}
                 defaultChecked
                 />
                 <label htmlFor="vanilla">Vanilla</label>
 
                 <input 
                 type="radio" 
                 id="angular" 
                 name="sabor" 
                 value="angular" 
                 onChange={(e) => setSabor(e.target.value)}
                 />
                 <label htmlFor="angular">Angular</label>
 
                 <input 
                 type="radio" 
                 id="react" 
                 name="sabor" 
                 value="react" 
                 onChange={(e) => setSabor(e.target.value)}
                 />
                 <label htmlFor="react">React</label>
 
                 <p>Elige tu lenguake de programacion favorito</p>
                 <select name="lenguaje" onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
                     <option value="">---</option>
                     <option value="js">js</option>
                     <option value="py">py</option>
                     <option value="php" >php</option>
                     <option value="go">go</option>
                 </select>
 
                 <br/>
                 <label htmlFor="terminos">Acepto Terminos y condiciones</label>
                 <input type="checkbox" id="terminos" name="terminos" value=""  onChange={(e) => setTerminos(e.target.checked)}/>
 
                 <input type="submit"></input>
 
             </form>
         </>
     )
 */

    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,// permite accecer a todo lo que ya tiene el formulario
            //e. target es el evento que origino el evento
            //y accecdemos al nombre del input 
            // los [] son para crear una propiedad del objeto, para mezclar el objeto que ya tiene la propiedad y si ya existe la actualiza
            [e.target.name]: e.target.value,
        });
    };

    const handleChecked = (e) => {
        setForm({
            ...form,// permite accecer a todo lo que ya tiene el formulario
            //e. target es el evento que origino el evento
            //y accecdemos al nombre del input 
            // los [] son para crear una propiedad del objeto, para mezclar el objeto que ya tiene la propiedad y si ya existe la actualiza
            [e.target.name]: e.target.checked,
        });
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        alert("El formulario se ha enviado");
    };

    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                />

                <p>Elige tu sabor js favorito</p>

                <input
                    type="radio"
                    id="vanilla"
                    name="sabor"
                    value="vanilla"
                    onChange={handleChange}
                    defaultChecked
                />
                <label htmlFor="vanilla">Vanilla</label>

                <input
                    type="radio"
                    id="angular"
                    name="sabor"
                    value="angular"
                    onChange={handleChange}
                />
                <label htmlFor="angular">Angular</label>

                <input
                    type="radio"
                    id="react"
                    name="sabor"
                    value="react"
                    onChange={handleChange}
                />
                <label htmlFor="react">React</label>

                <p>Elige tu lenguake de programacion favorito</p>
                <select name="lenguaje"onChange={handleChange} defaultValue="">
                    <option value="">---</option>
                    <option value="js">js</option>
                    <option value="py">py</option>
                    <option value="php" >php</option>
                    <option value="go">go</option>
                </select>

                <br />
                <label htmlFor="terminos">Acepto Terminos y condiciones</label>
                <input type="checkbox" id="terminos" name="terminos" value="" onChange={handleChecked} />

                <input type="submit"></input>

            </form>
        </>
    );


}