import { useEffect, useState } from "react";

export default function useCountry(code) {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => setCountry(data[0]))
      .catch(() => setError(true));
  }, [code]);

  return { country, error };
}