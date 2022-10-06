import './Home.css'

import {SubMenu} from '../SubMenu/SubMenu.js'

import {Footer} from '../Footer/Footer.js'

export function Home(){

    let descripcionArtista = "Aventura es una agrupación Dominicana de bachata fundada por Anthony \"Romeo\" Santos, Lenny Santos, Max Agende Santos y Henry Santos en la República Dominicana. Son considerados como uno de los grupos latinos más influyentes de todos los tiempos.[cita requerida] El grupo fue parte integral de la evolución de la música bachata y son los pioneros del sonido moderno de la bachata. Aventura lanzó cinco álbumes de estudio en una década, creando muchos éxitos como \"Cuando Volverás\", \"Un Beso\", \"Mi Corazoncito\", \"Los Infieles\", \"El Perdedor\", \"Por Un Segundo\", \"Dile Al Amor\", entre otros. Han vendido muchas arenas, incluido el mundialmente famoso Madison Square Garden. Aventura ha sido nominado a premios como los American Music Awards, los Latin Grammy Awards, los Billboard Latin Music Awards y el Premio Lo Nuestro. Aventura es uno de los grupos latinos más reconocidos internacionalmente de las últimas dos décadas y con frecuencia se refieren a sí mismos como \"K.O.B.\" o \"Los Reyes de la bachata\"."

    return(
        <>
            <section className="banner text-white">
                <h1 className="fw-bold">AVENTURA</h1>
                <p>Aventura es una agrupación Dominicana de bachata fundada por Anthony "Romeo" Santos, Lenny Santos, Max Agende Santos y Henry Santos en la República Dominicana. Son considerados como uno de los grupos latinos más influyentes de todos los tiempos.[cita requerida] El grupo fue parte integral de la evolución de la música bachata y son los pioneros del sonido moderno de la bachata. Aventura lanzó cinco álbumes de estudio en una década, creando muchos éxitos como "Cuando Volverás", "Un Beso", "Mi Corazoncito", "Los Infieles", "El Perdedor", "Por Un Segundo", "Dile Al Amor". ", entre otros. Han vendido muchas arenas, incluido el mundialmente famoso Madison Square Garden. Aventura ha sido nominado a premios como los American Music Awards, los Latin Grammy Awards, los Billboard Latin Music Awards y el Premio Lo Nuestro. Aventura es uno de los grupos latinos más reconocidos internacionalmente de las últimas dos décadas y con frecuencia se refieren a sí mismos como "K.O.B." o "Los Reyes de la bachata".</p>
            </section>

            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">AVENTURA</h1>
                            <p className='text-center'>{descripcionArtista}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <SubMenu></SubMenu>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </>
    )
}