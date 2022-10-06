export function Carrusel(){

    return(

        <>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/aventura.jpg?alt=media&token=91baff73-f578-413d-9fdd-9e192547d243" className="w-100" height="800" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/aventura2.jpg?alt=media&token=7b8725a0-3101-43aa-b1d4-fee838a230f3" className="w-100" height="800" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fotosartistasdap.appspot.com/o/aventura3.jpg?alt=media&token=fa172856-b67b-440c-8936-9a115663f6ef" className="w-100" height="800" alt="..."/>
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