import React from 'react'
import Card from './Card'
import style from "./Cards.module.css"
import { Link } from 'react-router-dom'

export default function Cards(props) {
    const {cities,onClose}=props
    if(cities){
    return (
        <div>
            
            <div className={style.box_city}>   
            {
                cities.map(item=>
                    <p>
                    <Card 
                     key={item.id}
                     max={item.max}
                     min={item.min}
                     name={item.name}
                     img={item.img}
                     id={item.id}
                    
                     

                     onClose={() => onClose(item.id)}
                    />
                    </p>
                 
                )
            }
            </div>
        
            </div>
    )
        }else{
            console.log("No existe")
            //alert("No ingresa ciudad")
            return (
                        <div>
                            No se Ingreso ninguna ciudad
                      </div>
             
            )
                     
        }
       
}

