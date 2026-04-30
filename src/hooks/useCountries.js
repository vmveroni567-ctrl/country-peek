import { useEffect, useState } from "react";

export default function useCountries(query) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (!query.trim()) return;

    fetch(`https://restcountries.com/v3.1/name/${query}`)
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(() => setCountries([]));
  }, [query]);

  return countries;
}