import { useState } from "react";
import useCountries from "../hooks/useCountries";
import CountryCard from "../components/CountryCard";

function Home() {
  const [query, setQuery] = useState("");
  const countries = useCountries(query);

  return (
    <div>
      <input
        aria-label="Search for a country"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="cards-grid">
        {countries.length === 0 ? (
          <p>No countries found</p>
        ) : (
          countries.map((c) => (
            <CountryCard key={c.cca3} country={c} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;