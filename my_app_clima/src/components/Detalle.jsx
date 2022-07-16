import React,{useState} from 'react'
import { BrowserRouter as Router,
Link,
Switch,
Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Descripciones from './Descripciones';

export default function Detalle({cities}) { 
  

    return (
        <div>
            <ul>
                
                 {
                     
                      cities.map(el=>
                        
                        <li>
                        <Descripciones
                        key={el.id}
                         humedad={el.humedad}
                         presion={el.presion}
                         visibilidad={el.visibilidad}
                         viento={el.viento}
                         clima={el.clima}
                         
                        />
                          
                         </li>
                      
                          
                      )
                 }
            </ul>
            


        </div>
    )
}
