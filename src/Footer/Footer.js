export function Footer(){

    return(
        <>
            <footer className="container-fluid bg-dark text-white p-3 mt-5">

                <div className="row">

                    <div className="col-12 col-md-6 text-end">
                        <h4>&copy; Diego Alejandro Pérez</h4>
                        <h4>Medellín</h4>
                        <h4>Aprendíz SURA</h4>
                        <h4>2022</h4>
                    </div>

                    <div className="col-12 col-md-6 text-start border-start align-self-center">
                        <h4>Redes sociales</h4>
                        <div>
                            <a href="https://github.com/" className="text-white"><i className="bi bi-github fs-1 p-3"></i></a>                        
                            <a href="https://www.linkedin.com/feed/" className="text-white"><i className="bi bi-linkedin fs-1 ms-2"></i></a>                        
                        </div>
                    </div>

                </div>

            </footer>
        </>
    )

}