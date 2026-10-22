import { useState } from "react";
import type { type } from "../assets/DataType/type";
import "./CountriCardStyle.css";

export interface CountriCardProps {
  Countri: type;
  //step 6:giben Datatype HandelVigitedCountry
  HandelVigitedCountry: (country: type) => void;
  // for flag Given Data type 
  HandelVigitedCountryFlag: (flag: string) => void;
}
// step  5 : resibe the props / HandelVigitedCountry  /HandelVigitedCountryFlag
const CountriCard = ({ Countri,HandelVigitedCountry,HandelVigitedCountryFlag,
}: CountriCardProps) => {
  const [Vigited, SetVisited] = useState<boolean>(false);
  const HandelVegited = () => {
    if (Vigited) {
      SetVisited(false);
    } else {
      SetVisited(true);
    }
    // step 7 :call HandelVigitedCountry props nat gib  Country as a premeter  for count
    HandelVigitedCountry(Countri);
  };

  return (
    <div className={`Boder ${Vigited ? "Country_Vigited" : "  "}`}>
      <img src={Countri.flags.flags.png} alt={Countri.flags.flags.alt} />
      <h2 className="">Name:- {Countri.name.common}</h2>
      <h3>official Name:- {Countri.name.official}</h3>
      <div className="Area ">
        <h3>population:- {Countri.population.population}</h3>
        <h3>area:- {Countri.area.area}</h3>
      </div>
      <h3>region:- {Countri.region.region}</h3>
      {/* //step :8 add HandelVegited on button  */}
      <button onClick={HandelVegited}>
        {" "}
        {Vigited ? "Vigited " : "Not Vigited"}{" "}
      </button>
      {/* for flag  */}
      {/* If we do not want to pass any parameters during a click, we simply use the
      function name; however, if we do want to pass parameters, we must include
      them when the click occurs. */}
      <button onClick={()=>HandelVigitedCountryFlag(Countri.flags.flags.png)}>
        Add Flag as Vigited{" "}
      </button>
    </div>
  );
};

export default CountriCard;
