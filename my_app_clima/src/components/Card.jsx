import React,{useState} from 'react'
import styl from "./Card.module.css"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {RiDeleteBin6Line} from "react-icons/ri"

export default function Card(props) {
   
    
    const {max,min,name,img,onClose,id}=props
//  const {ciudad}=useParams()


    return (
        <div >
            <div  className={styl.card_modul} > 
           
            <button className={styl.card_btn_delete} onClick={onClose} > <RiDeleteBin6Line/></button>
            
            <p className={styl.name_city}>{name}</p>

            <p><img src={`http://openweathermap.org/img/wn/${img}@2x.png`} height="120" width="125" alt=''/></p>
            
            <div className={styl.temperatura_mx}>  
            <p> max</p>
            <span>{max}°</span>
            </div>
            
            <div className={styl.temperatura_mn}>  
            <p>min </p>
            <span >{min}°</span>
            </div>
            <div className={styl.card_btn_detail}>
            <Link to={`Ciudad/${id}`}>
                <button className={styl.boton_detalle}>Ver detalle</button>
            </Link>
            </div>
          
            </div>
        </div>
    )
}
