export async function servicioSpoty(){
    
    const URI = "https://api.spotify.com/v1/artists/1qto4hHid1P71emI6Fd8xi/top-tracks?market=US"

    const TOKEN = "Bearer BQDjkQOZ4Zs14KJHjIdbiep9ncIZ9DoC5fbIV_-2x5Z4gQWvBJpHdhilmFo4P5oSOOsy3V-PP93qiZa5bI0pGVsP-mTk9c-ZR9U2wkrFBoOH6xYfXAmmlN3lI3PDult_jUd7o2oEAy1FL9CAsw418OF0yPkMaoaY5MhKCPeKag2xROITep0OzKky9DKIj_5kEPY"

    const PETICION = {
        method: "GET",
        headers: {Authorization: TOKEN}
    }

    let respuesta = await fetch(URI, PETICION)
    let datos = await respuesta.json()
    return datos
}