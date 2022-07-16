import React,{useState,useEffect} from 'react'

import style from "./Temporizador.module.css"

export default function Temporizador() {
    const [fecha,setFecha]=useState(new Date().toLocaleDateString());
    const [hora,setHora]=useState([]); 

   const data= setInterval(() => {
        setHora(new Date().toLocaleTimeString())
    }, 1000);

 

    return (
      
            <div className={style.date_local}>
            <span> {fecha}</span>
            <p>{hora}</p>
        
            </div>
        
    )
}
