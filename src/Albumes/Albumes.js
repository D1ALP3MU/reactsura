import { servicioSpoty } from "../services/servicioSpoty.js"
import { servicioTOKEN } from "../services/servicioTOKEN.js"

import { useState, useEffect } from "react"

export function Albumes(){

    // Declarando mi primer useState
    const[canciones, setCanciones] = useState(null)

    // useState para la carga de datos
    const[carga, setCarga] = useState(true)

    // Usando en useEffect
    useEffect(function(){
        servicioSpoty()
        .then(function(respuesta){
            console.log(respuesta)
            setCanciones(respuesta.tracks)
            setCarga(false)
        })
        console.log(canciones)
    },[])

    if (carga == true){

        return(
            <>
                <h1>Estoy cargando...</h1>
            </>
        )

    } else {

        return(
            <>
                <h1 className="text-center bg-dark text-light mt-4 rounded-5">Albumes</h1>
                <div className="row row-cols-1 row-cols-md-4 g-3 mt-3">

                {
                    canciones.map(function(cancion){
                        return(
                            <>
                                <div className="col mt-3">
                                    <div className="card h-100">
                                    <img src={cancion.album.images[0].url} alt="foto" className="img-fluid w-100 h-100"/>
                                        <audio src={cancion.preview_url} controls="controls"/>
                                        <div className="card-footer bg-secondary">
                                            <h1 className="text-center">{cancion.album.name}</h1>
                                            <h5 className="text-center">{cancion.album.release_date}</h5>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            </>
        )

    }

    //HOOKS son funciones especiales para tener una variables globales para acceder a ella cuando quiera y donde quiera y escribirlas donde quiera y cuando quiera
    // useState 
    
    
}