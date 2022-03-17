import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      {countries.map((country) => {
        return <Country name={country.name}></Country>;
      })}
      <h1>Countries:{countries.length}</h1>
    </div>
  );
};

export default Countries;
