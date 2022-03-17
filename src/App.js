import "./App.css";

import Countries from "./components/Countries/Countries";

function App() {
  return (
    <div>
      <Countries></Countries>
    </div>
  );
}

// const LoadCountries = () => {
//   const [countries, setCountry] = useState([]);
//   useEffect(() => {
//     fetch("https://restcountries.com/v2/all")
//       .then((res) => res.json())
//       .then((data) => setCountry(data));
//   }, []);
//   return (
//     <div>
//       {countries.map((country) => {
//         return (
//           <Country
//             name={country.name}
//             population={country.population}
//           ></Country>
//         );
//       })}
//     </div>
//   );
// };

// const Country = (props) => {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h4>Population: {props.population}</h4>
//     </div>
//   );
// };
export default App;
