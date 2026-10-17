import { Suspense } from "react";
import "./App.css";
import type { type } from "./assets/DataType/type";
import Countries from "./Component/Countries";
const CountryPromise = async ():Promise<type[]> => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data =await res.json();
  return data;
};

function App() {
  return (
    <>
      <h1>Hello World</h1>
       <Suspense fallback={<h2>Loading...</h2>}>
      <Countries CountryPromise={CountryPromise()} />
    </Suspense>
    </>
  );
}

export default App;
