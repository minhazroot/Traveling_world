import type { type } from "../assets/DataType/type";
import './CountriCardStyle.css'

export interface CountriCardProps {
    Countri: type
}

const CountriCard = ({ Countri }: CountriCardProps) => {
    
    return (
      <div className="Boder">
        <img src={Countri.flags.flags.png} alt={Countri.flags.flags.alt} />
        <h2  className="">Name:-  {Countri.name.common}</h2>
        <h3>official Name:- {Countri.name.official}</h3>
        <div className="Area ">
        <h3>population:- {Countri.population.population}</h3>
        <h3>area:- {Countri.area.area}</h3>
        </div>
        <h3>region:-  {Countri.region.region}</h3>
      </div>
    )
}

export default CountriCard;