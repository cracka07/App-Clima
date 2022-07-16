import React,{useState,useEffect} from 'react'
import style from "./SearchBar.module.css"
import {useParams} from "react-router-dom"

import { Link } from 'react-router-dom'

export default function SearchBar({onSearch}) {
   

    
     const [value, setValue]=useState("")


    const obtenerCities=(e)=>{
        e.preventDefault()
        onSearch(value) 
        setValue("")
        }
    
 



    return (
       
          
          
            
            <form onSubmit={obtenerCities}>
          
           
            <div className={style.box_seacBar_input}>
            <input className={style.input_text} value={value}   onChange={e=>setValue(e.target.value)} type="text" placeholder='Ciudad' />
            <input className={style.input_btn} type="submit" value="Agregar"/>

            </div>
           
            
            </form>
           
            
        
        
    )
}
