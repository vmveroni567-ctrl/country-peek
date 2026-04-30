import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";

function Favourites() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];

    Promise.all(
      favs.map(code =>
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
          .then(res => res.json())
          .then(data => data[0])
      )
    ).then(setCountries);
  }, []);

  return (
    <div className="cards-grid">
      {countries.length === 0 ? (
        <p>No favourites yet</p>
      ) : (
        countries.map(c => <CountryCard key={c.cca3} country={c} />)
      )}
    </div>
  );
}

export default Favourites;