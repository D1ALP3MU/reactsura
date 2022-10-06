import './Integrantes.css';
import 'animate.css';
import WOW from 'wowjs';
import { useEffect } from 'react';


export function Integrantes(){

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, []) 

    return(
        <>
            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/romeiosantosAventura.png?alt=media&token=d6f279bf-4439-4f90-b97a-2c1b46ac4b88" alt="foto1" className="img-fluid w-100 rounded-5 animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#Artista1"/>
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInRight wow'>
                    <h2>Romeo Santos</h2>
                    <h3>Vocalista</h3>
                </div>
            </div>
            
            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="Artista1">
                        <div className="card card-body bg-dark text-white">
                        Anthony Santos (Bronx, Nueva York, 21 de julio de 1981), ​conocido por el nombre artístico de Romeo Santos, es un cantante estadounidense de origen dominicano. Es considerado en la mayor parte de América como el Rey de la Bachata, por ser el líder, vocalista y compositor principal de la agrupación Aventura.
                        </div>
                    </div> 
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div className='col-12 col-md-4 align-self-center border-end text-end animate__animated animate__backInLeft wow'>
                    <h2>Lenny Santos</h2>
                    <h3>Guitarra</h3>
                </div>
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/LennySantosAventura.JPG?alt=media&token=7b15dbfe-e422-4a14-b976-732d54005652" alt="foto1" className="img-fluid w-100 rounded-5 animate__animated animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#Artista2"/>
                </div>
            </div>
            
            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="Artista2">
                        <div className="card card-body bg-dark text-white">
                        Nacido en el Bronx, Nueva York, pero sus padres son de origen Dominicano.
                        Comenzó en la música a la edad de quince años, sus preferencias musicales en sus inicios se inclinaban al hip hop. Pero las influencias en su casa, donde sólo se escuchaba bachata, hicieron que creciera conociendo y respetando el genero. "Comencé a ensayar bachata en la casa incorporándole un toque de hip hop, esa combinación es la que se siente actualmente en el grupo Aventura".
                        </div>
                    </div> 
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/HenrySantosAventura.webp?alt=media&token=4e6243ac-1796-43bc-934b-938236720fd1" alt="foto1" className="img-fluid w-100 rounded-5 animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#Artista3"/>
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInRight wow'>
                    <h2>Henry Santos</h2>
                    <h3>Coros</h3>
                </div>
            </div>
            
            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="Artista3">
                        <div className="card card-body bg-dark text-white">
                        Henry Santos Jeter (nacido como Henry Santos el 15 de diciembre de 1979) es un cantante, compositor y productor dominicano . Mejor conocido por su paso como cantante y compositor en el grupo de bachata Aventura . Hizo su debut como solista en 2011.
                        </div>
                    </div> 
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div className='col-12 col-md-4 align-self-center border-end text-end animate__animated animate__backInLeft wow'>
                    <h2>Max Santos</h2>
                    <h3>Bajo</h3>
                </div>
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/maxsantosAventura.jpg?alt=media&token=44fc9891-2aac-4ff2-8ccc-46b3629afee4" alt="foto1" className="img-fluid w-100 rounded-5 animate__animated animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#Artista4"/>
                </div>
            </div>
            
            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="Artista4">
                        <div className="card card-body bg-dark text-white">
                        Max "Mikey" Santos (nacido el 30 de enero de 1982), conocido profesionalmente como Max Agende, es un bajista, arreglista musical y rapero estadounidense. Saltó a la fama mundial como co-fundador del grupo de bachata Aventura . Max es considerado una leyenda del bajo en el mundo de la bachata y es responsable de la modernización de la forma de tocar el bajo de la bachata. Trajo técnicas de bajo de canciones de rock que tocaba cuando era niño.
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}