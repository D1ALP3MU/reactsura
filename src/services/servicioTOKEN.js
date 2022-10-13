export async function servicioTOKEN(){
    
    // URI
    const URI = "https://accounts.spotify.com/api/token"

    // DATOS
    const DATO1 = "grant_type=client_credentials"
    const DATO2 = "client_secret=8587846f597447b186dccabceccccaaf"
    const DATO3 = "client_id=75bd7e4eed464df592e0b79032b60505"

    // PETICION
    const PETICION = {
        method: "POST",
        headers: {"Content-type": "application/x-www-form-urlencoded"},
        body: DATO1 + "&" + DATO2 + "&" + DATO3
    }

    // fetch
    let respuesta = await fetch(URI, PETICION)
    let datos = await respuesta.json()
    datos = datos.token_type + ' ' + datos.access_token
    return datos

}