import { use } from "react";
import type { type } from "../assets/DataType/type";
import CountriCard from "../CountriCard/CountriCard";
import './Countries.css'

export interface CountriesProps {
  CountryPromise: Promise<type[]>;
}

const Countries = ({ CountryPromise }: CountriesProps) => {
  const Countries = use(CountryPromise);
  console.log(Countries);

  return (
    <div  className="CountryLayout">
      {Countries.map((Countri) => (<CountriCard key={Countri.ccn3.ccn3} Countri={Countri}></CountriCard>))}
    </div>
  );
};

export default Countries;
