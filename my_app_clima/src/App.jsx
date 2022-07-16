import React,{useState} from 'react';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import style from "./components/Card.module.css"
import GlobalStyles from './components/GlobalStyles.jsx';
import { BrowserRouter as Router,
         Link,Switch,Route} 
         from 'react-router-dom'; 

import Temporizador from './components/Temporizador.jsx';
import { useParams } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Detalle from "./components/Detalle"
import Ciudad from './components/Ciudad.jsx';



function App() {

const [cities, setCities]=useState([])

 //const {ciudad}=useParams()


 


const onSearch=(ciudad)=>{
   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
   .then(respuesta=>respuesta.json())
   .then(json=>  {   
    if(json!==undefined){
   
    const city={
      max:Math.round(json.main.temp_max),
      min:Math.round(json.main.temp_min), 
      name:json.name,
      img:json.weather[0].icon,
      id:json.id,
      humedad:json.main.humidity,
      presion:json.main.pressure, 
      visibilidad:json.visibility,
      viento:json.wind.speed,
      clima:json.weather[0].description
      
      
    }
    const oldCity=cities.find(e=>e.id===json.id)
    if (oldCity) return alert("Ya existe la ciudad" + " " + oldCity.name)
  setCities(cities=>[...cities,city]);

  
   }else{
     alert("Ciudad no encontrada")
   }
 
  }
 )
 .catch(e=>alert("No se encuentra esta ciudad. Ingrese una ciudad para ver el clima, por favor."))
}

function onFilter(ciudadId){

  let ciudad=cities.filter(c => c.id === parseInt(ciudadId))
  if (ciudad.length>0){
    return  ciudad[0]
  }else{
    return null
  }
}


let onClose=(id)=>{
  const cityDelete=cities.filter(item=> id !== item.id)
  setCities(cityDelete)
}



  return (
    <div className={style.apper}>
     
     
      <Router>
      <GlobalStyles/>
          <Nav/>
        <Switch>
        <Route  path="/Ciudad/:ciudadId" 
   
        >   
            <GlobalStyles/>    
                <Ciudad
          onFilter={onFilter}
        />
          </Route>
     
          <Route exac path="/">
          
          <SearchBar  onSearch={onSearch}/>
          
          <Cards  cities={cities} onClose={onClose}/>
  
          <Temporizador/>
        
             
          </Route>
        
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
