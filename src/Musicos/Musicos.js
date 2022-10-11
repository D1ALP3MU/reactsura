import { Footer } from "../Footer/Footer.js"

export function Musicos(){

    // Un arreglo de objetos es el formato común al consumir un api
    let musicos = [
        {
            nombre: "Romeo Santos",
            rol: "Vocalista Principal",
            url: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/aventuraRomeo1.jpg?alt=media&token=5a69661f-a0b3-42c8-8f22-918df06a4640"
        },
        {
            nombre: "Lenny Santos",
            rol: "Guitarrista",
            url: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/aventuraLenny.jpg?alt=media&token=447cb97e-4450-4960-9247-4c351e986a16"
        },
        {
            nombre: "Henry Santos",
            rol: "Corista",
            url: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/aventuraHenry.jpg?alt=media&token=dbf6ad99-7c12-461d-aa21-0a786679e607"
        },
        {
            nombre: "Max Santos",
            rol: "Bajista",
            url: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/aventuraMax.jpg?alt=media&token=c0e7a095-332c-4178-b212-e28b1a5cdf1b"
        }
    ]

    let conciertosMemorables = [
        {
            fecha: "19/12/2021",
            pais: "República Dominicana",
            descripcion: "Con un estadio Olímpico totalmente lleno, el popular grupo de bachata «Aventura», inició la noche del sábado su tan aclamado concierto, siendo este el primero de dos presentaciones que ofrecerán en noches consecutivas, culminando hoy domingo. El show inició con una presentación audiovisual de Cerveza Presidente, mostrando un show de 150 drones, que dio inicio a una de las noches más inolvidables y cargadas de música de los últimos años en el país, algo que estremeció a todos los que se dieron cita al concierto.", 
            foto: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/concierto2.webp?alt=media&token=d6ab565e-1ec4-4226-9696-d1283cbe9f48"
        },
        {
            fecha: " 07/09/2021",
            pais: "Las Vegas",
            descripcion: "Esta vez Carolina Giraldo, mejor conocida como Karol G, se lució con una nueva anécdota, y es que al acudir al concierto de Aventura, la artista terminó en el escenario con Romeo Santos cantando ‘Obsesión’. Según la bichota, quien contó todo en su Instagram, se encontraba en Las Vegas cuando se enteró de que Aventura daría un concierto en Los Ángeles, por lo que no dudó en viajar para verlos. ",
            foto: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/concierto3.jpg?alt=media&token=81779e8e-ffdc-4ff4-a2ce-459596d47c71" 
        },
        {
            fecha: "13/02/2020",
            pais: "Estados Unidos",
            descripcion: "Dallas – La agrupación Aventura dio a conocer hoy que regresará a los escenarios por primera vez en 10 años con una gira que los llevará a varias ciudades de Estados Unidos, incluida Dallas. El grupo de música bachata encabezado por Romeo Santos y acompañado por Lenny Santos, Henry Santos y Max Agende Santos estarán en el Norte de Texas la noche antes del Día de los Enamorados",
            foto: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/concierto4.jpg?alt=media&token=450fce10-ac4f-4f4d-b5a2-149e5be12c3c"
        },
        {
            fecha: "22/02/2011",
            pais: "Chile",
            descripcion:"“AVENTURA” recibió Antorchas de Plata y Oro, Gaviota de Plata y tras la fuerte petición del público, Gaviota de Oro. Desde el inicio de la jornada, con la sola mención de su nombre o el de su líder Anthony “Romeo” Santos, la Quinta Vergara enloqueció y con un griterío sin tregua comenzaron a cantar varios de los temas contenidos en su más reciente álbum “THE LAST”.",
            foto: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/concierto5.jpg?alt=media&token=67700788-9c5e-44e7-bda8-27d95764d5c1" 
        },
        {
            fecha: "15/07/2014",
            pais: "New York, Estados Unidos",
            descripcion: "El cantautor estadounidense de bachata, Romeo Santos, enloqueció a su público en el segundo concierto de ‘Fórmula Volumen 2’ que ofreció en solitario este sábado en el estadio de Los Yankees en Nueva York, Estados Unidos, y donde se reencontró con sus ex compañeros del grupo que le vio nacer como artista, ‘Aventura’. El estadio, donde se reunieron alrededor de 50.000 personas, se vino arriba cuando Lenny, Max y Henry aparecieron en el escenario para unirse a Santos, como en tiempos pasados en los que el cuarteto triunfó con ‘Aventura’, convirtiéndose en el grupo de bachata más conocido del mundo.",
            foto: "https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/concierto6.jpg?alt=media&token=b29801b9-f971-460b-985e-9c09ff03e87c"
        }
    ]

    //Mapeando un arreglo para hacer render
    return(
        <>
            <h1 className="text-center bg-dark text-light mt-4 rounded-5">Músicos</h1>
            <div className="row row-cols-1 row-cols-md-4 g-3 mt-3">


                {
                    musicos.map(function(musico){
                        return(
                            <>
                                <div className="col mt-3">
                                    <div className="card h-100">
                                        <img src={musico.url} alt="foto" className="img-fluid w-100 h-100"/>
                                        <div className="card-footer bg-secondary">
                                            <h1 className="text-center">{musico.nombre}</h1>
                                            <h5 className="text-center">{musico.rol}</h5>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

            <h1 className="text-center mt-4 bg-dark text-light rounded-5">Conciertos Memorables</h1>
            <div className="row row-cols-1 row-cols-md-4 g-3 mt-3">

                {
                    conciertosMemorables.map(function(concierto){
                        return(
                            <>
                                <div className="col mt-3">
                                    <div className="card h-100">
                                        <img src={concierto.foto} alt="foto" className="img-fluid w-100 h-100"/>
                                        <div className="card-footer">
                                            <h1 className="text-center">{concierto.pais}</h1>
                                            <h5 className="text-center">{concierto.fecha}</h5>
                                            <p>{concierto.descripcion}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <Footer></Footer>
        </>
         
    )


}