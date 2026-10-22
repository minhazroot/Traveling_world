import { use, useState } from "react";
import type { type } from "../assets/DataType/type";
import CountriCard from "../CountriCard/CountriCard";
import "./Countries.css";

export interface CountriesProps {
  CountryPromise: Promise<type[]>;
}

const Countries = ({ CountryPromise }: CountriesProps) => {
  //step 1:-Declair  a State
  const [VisitedCountry, SetVisitedCountry] = useState<type[]>([]);
  //Handel Flag  Declair  a State
  const [VigitedFlag, SetVigitedFlag] = useState<string[]>([]);

  // step 2:- Make a  Even  Handeler :function return type   is   :void
  const HandelVigitedCountry = (Country: type): void => {
    // step 3:-  use Spliet operator To coppy Privies Array and + New    array
    const NewVisitedCountr = [...VisitedCountry, Country];
    SetVisitedCountry(NewVisitedCountr);
  };

  //  make Flag  Even handeler  No  reatin    (:void)
  //  এই কন্ডিশনে একটা বিশেষ বিষয় হল যদি কোন ফ্লাগ একবার যুক্ত
  //   করা হয় সেটা দ্বিতীয়বার যুক্ত হবে না ,কিন্তু দ্বিতীয় বার যদি অ্যাড
  //    ফ্লাক বাটনে ক্লিক করা হয় তাহলে এড ফ্ল্যাট থেকে ওই ফ্ল্যাটটা আন
  //     সিলেক্ট হয়ে যাবে ,দ্বিতীয় বার ক্লিক করলে প্রথম যুক্তৃতজ্ঞতা রিমুভ হয়ে যাবে
  const HandelVigitedCountryFlag = (flag: string): void => {
    if (VigitedFlag.includes(flag)) {
      const remainingFlages = VigitedFlag.filter((F) => F !== flag);
      SetVigitedFlag(remainingFlages);
    } else {
      const NewVisitedFlag = [...VigitedFlag, flag];
      SetVigitedFlag(NewVisitedFlag);
    }
  };
  const Countries = use(CountryPromise);
  // console.log(Countries);

  return (
    <div>
      <h3>Visited Country:{VisitedCountry.length} </h3>
      <h3>Visited flags: {VigitedFlag.length}</h3>
        <div className="FlagContiner">
        {
          VigitedFlag.map(flag  => <img className="FlagSize" src={flag} alt=""/>)
        }
      </div>
      <div className="CountryLayout">
        {Countries.map((Countri) => (
          <CountriCard
            key={Countri.ccn3.ccn3}
            Countri={Countri}
            // step 4: send a promise HandelVigitedCountry for  CountryCard
            HandelVigitedCountry={HandelVigitedCountry}
            // sent Flag Even  Handeler  as a props
            HandelVigitedCountryFlag={HandelVigitedCountryFlag}
          ></CountriCard>
          
        ))}
      </div>
   
    </div>
  );
};

export default Countries;
