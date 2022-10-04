import './Home.css'

import {SubMenu} from '../SubMenu/SubMenu.js'

import {Footer} from '../Footer/Footer.js'

export function Home(){

    let descripcionArtista = "Alan Walker es un productor y DJ nacido en Inglaterra y con nacionalidad noruega que se dio a conocer principalmente a raíz de su tema \"Faded\", en 2015, por el que recibió certificaciones de platino en diferentes países y que alcanzó los 1300 millones de reproducciones en Youtube. En la actualidad está considerado como uno de los artistas más relevantes del momento en el panorama de la música electrónica."

    return(
        <>
            <section className="banner text-white">
                <h1 className="fw-bold">ALAN WALKER</h1>
                <p>Alan Walker es un productor y DJ nacido en Inglaterra y con nacionalidad noruega que se dio a conocer principalmente a raíz de su tema "Faded", en 2015, por el que recibió certificaciones de platino en diferentes países y que alcanzó los 1300 millones de reproducciones en Youtube. En la actualidad está considerado como uno de los artistas más relevantes del momento en el panorama de la música electrónica.</p>
            </section>

            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">ALAN WALKER</h1>
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