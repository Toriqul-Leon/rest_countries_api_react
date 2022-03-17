import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return <LoadCountries></LoadCountries>;
}

const LoadCountries = () => {
  const [countries, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  return (
    <div>
      {countries.map((country) => {
        console.log(country);
      })}
      <h1>Countries</h1>;
    </div>
  );
};
export default App;
