import { useParams } from "react-router-dom";
import useCountry from "../hooks/useCountry";

function CountryPage() {
  const { code } = useParams();
  const { country, error } = useCountry(code);

  if (error) return <p>Country not found</p>;
  if (!country) return <p>Loading...</p>;

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital?.[0] ?? "N/A"}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion ?? "N/A"}</p>
    </div>
  );
}

export default CountryPage;