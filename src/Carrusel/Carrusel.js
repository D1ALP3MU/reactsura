export function Carrusel(){

    return(

        <>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/alan-walker-fondo-oscuro_2560x1440_xtrafondos.com.jpg?alt=media&token=66d98c6b-1f9c-4cab-85f9-5a28a85d41df" className="w-100" height="800" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/alan_walker-historia2.jpg?alt=media&token=661a2e62-eed4-4741-bd3f-e5670a1d96c7" className="w-100" height="800" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/Alan-Walker-history4.jpg?alt=media&token=1e844e4f-0d70-42c2-9af0-9ddf5be439a6" className="w-100" height="800" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        
        </>

    )

}