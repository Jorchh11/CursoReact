import React ,{useState,useEffect} from 'react';

export default function ScrollHooks (){

    const [scrollY, setscrollY] = useState(0);
    useEffect(()=>{
       // console.log("Moviendo escroll")

        const detectarScroll= () => setscrollY(window.pageYOffset);
        window.addEventListener("scroll", detectarScroll);

        return () => {window.removeEventListener("scroll", detectarScroll)};

    },[scrollY]);

    useEffect(()=>{
        //console.log("Fase de Montaje")

        const detectarScroll= () => setscrollY(window.pageYOffset);
        window.addEventListener("scroll", detectarScroll);

    },[]);

    useEffect(()=>{
        //console.log('Fase actualizacion')
    });


    return(
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>Scrol Y: {scrollY}px</p>
        </>
    );
}