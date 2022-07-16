import { useEffect, useState } from "react"
import { useParams } from "react-router"
import style from "./Ciudad.module.css"

const BASE_URL = "http://api.openweathermap.org/data/2.5/weather"
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
export default function City({onFilter}) {
    const [city, setCity] = useState(null)
    const {ciudadId} = useParams()
    const getCityById=()=> {
        let url = `${BASE_URL}?id=${ciudadId}&appid=${apiKey}` //formando la peticion
        fetch(url)
        .then((response) => response.json())
        .then((recurso) => {
            const ciudad = {
                min: Math.round(recurso.main.temp_min),
                max: Math.round(recurso.main.temp_max),
                img: recurso.weather[0].icon,
                id: recurso.id,
                wind: recurso.wind.speed,
                temp: recurso.main.temp,
                name: recurso.name,
                weather: recurso.weather[0].main,
                clouds: recurso.clouds.all,
                latitud: recurso.coord.lat,
                longitud: recurso.coord.lon
              };
              setCity(ciudad)
        })
    }
    useEffect(() => {
        // let ciudad = onFilter(ciudadId)
        // setCity(ciudad)
        getCityById(ciudadId)
    }, []) // componentDidMount

    console.log(ciudadId)
    return <div>
        {city ?
            <div>
          <div className="card-body">
           
            <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-4 ">
                <div className={style.city_clouds}>
                <p>Nubosidad</p>
                <p>{city.clouds}°</p>
                </div>
                
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4">
                <div className={style.city_wind}>
                <p>Viento</p>
                <p>{city.wind}°</p>
                </div>
                
                
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4">
                <p>Cielo</p>
                <p>{city.weather}</p>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4">
                <div className={style.city_lat}>
                <p>Latitud</p>
                <p>{city.latitud}</p>
                </div>
                
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4">
                <div className={style.city_long}>
                <p>Longitud</p>
                <p>{city.longitud}</p>
                </div>
               
              </div>
             
            </div>
          </div>
            </div>
            :
            <div className={style.load}>
                Cargando
            </div>
        }
    </div>
}