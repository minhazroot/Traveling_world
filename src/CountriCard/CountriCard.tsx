import { useState } from "react";
import type { type } from "../assets/DataType/type";
import './CountriCardStyle.css'

export interface CountriCardProps {
    Countri: type
}

const CountriCard = ({ Countri }: CountriCardProps) => {
    const [Vigited , SetVisited]=useState<boolean>(false);
    const HandelVegited=()=>{
      if(Vigited){
        SetVisited(false)
      }else{
        SetVisited(true)
      }

    }
    
    return (
      
   <div className={`Boder ${Vigited?'Country_Vigited':'  '}`}>
        <img src={Countri.flags.flags.png} alt={Countri.flags.flags.alt} />
        <h2  className="">Name:-  {Countri.name.common}</h2>
        <h3>official Name:- {Countri.name.official}</h3>
        <div className="Area ">
        <h3>population:- {Countri.population.population}</h3>
        <h3>area:- {Countri.area.area}</h3>
        </div>
        <h3>region:-  {Countri.region.region}</h3>
        <button onClick={HandelVegited}> {Vigited   ?'Vigited ' : 'Not Vigited'} </button>
      </div>
    
    
    )
}

export default CountriCard;