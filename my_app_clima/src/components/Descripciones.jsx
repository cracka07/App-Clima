import React from 'react'

export default function Descripciones(props) {
    const {humedad,presion,visibilidad,viento,clima,id}=props
    return (
        <div>
            <span>humedad </span>
            <span> {humedad}</span>
            <span>presión {presion}</span>
            <span>visibilidad {visibilidad}</span>
            <span>viento {viento}</span>
             <span>clima {clima}</span>
        </div>
    )
}
