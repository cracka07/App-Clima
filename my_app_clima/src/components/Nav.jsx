import React from 'react'
import style from "./Nav.module.css"
import logo from "../img-screen/clima.png"
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <div className={style.nav_back}>
            <img className={style.foto} src={logo} alt="" title='Henry - Weather App'/>
            <figcaption> Weather's App  </figcaption>
            </div>
   
           
        </div>
    )
}
