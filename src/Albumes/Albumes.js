import { servicioSpoty } from "../services/servicioSpoty.js"
import { useState } from "react"

export function Albumes(){

    // Declarando mi primer useState
    const[canciones, setCanciones] = useState(null)

    servicioSpoty()
    .then(function(respuesta){
        setCanciones(respuesta.tracks)
    })
    console.log(canciones)

    //HOOKS son funciones especiales para tener una variables globales para acceder a ella cuando quiera y donde quiera y escribirlas donde quiera y cuando quiera
    // useState 
    
    return(
        <>
        <h1>HOLA SOY ALBUMES Y SOY UN COMPONENTE</h1>
        </>
    )
}