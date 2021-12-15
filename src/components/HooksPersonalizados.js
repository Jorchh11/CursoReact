import React from 'react';
import { useFetch } from '../Hooks/useFetch';

export default function HooksPersonalizados(){
    let url="https://pokeapi.co/api/v2/pokemon/";
    url='https://jsonplaceholder.typicode.com/users';
    let {data,isPending,error} = useFetch(url);
    return (
        <>
            <h2>Hooks perosnalizados</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>{JSON.stringify(error)}</h3>
            <pre style={{whiteSpace:"pre-wrap"}}>{JSON.stringify(data)}</pre>
        </> 
    );
}