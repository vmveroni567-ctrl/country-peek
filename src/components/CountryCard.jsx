import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CountryCard({ country }) {
  const { name, flags, cca3 } = country;

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    setSaved(favs.includes(cca3));
  }, [cca3]);

  const toggleFav = () => {
    let favs = JSON.parse(localStorage.getItem("favs")) || [];

    if (favs.includes(cca3)) {
      favs = favs.filter(f => f !== cca3);
    } else {
      favs.push(cca3);
    }

    localStorage.setItem("favs", JSON.stringify(favs));
    setSaved(!saved);
  };

  return (
    <div className="card">
      <img src={flags.svg} alt={`Flag of ${name.common}`} />

      <h3 className="card__name">{name.common}</h3>

      <Link to={`/country/${cca3}`}>View</Link>

      <button
        aria-label={saved ? "Remove from favourites" : "Save to favourites"}
        aria-pressed={saved}
        onClick={toggleFav}
      >
        {saved ? "♥ Saved" : "♡ Save"}
      </button>
    </div>
  );
}

export default CountryCard;