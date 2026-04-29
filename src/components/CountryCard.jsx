import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'

function CountryCard({ country }) {
  const { cca3, name, flags, population, region, capital } = country

  // 2. get favourites + dispatch
  const { favourites, dispatch } = useFavourites()

  // 3. check if already saved
  const isSaved = favourites.some((f) => f.cca3 === cca3)

  function handleFavClick(e) {
    e.stopPropagation() // prevent navigation
    e.preventDefault()  // extra safety for Link

    if (isSaved) {
      dispatch({ type: 'REMOVE_FAVOURITE', payload: cca3 })
    } else {
      dispatch({ type: 'ADD_FAVOURITE', payload: country })
    }
  }

  return (
    <Link to={`/country/${cca3}`} className="card">
      <img src={flags.png} alt={name.common} className="card__flag" />

      <div className="card__body">
        <h3>{name.common}</h3>
        <p>Population: {population.toLocaleString()}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital?.[0]}</p>

        {/* 4. Favourite button */}
        <button
          className={`fav-btn ${isSaved ? 'fav-btn--saved' : ''}`}
          onClick={handleFavClick}
        >
          {isSaved ? '♥ Saved' : '♡ Save'}
        </button>
      </div>
    </Link>
  )
}

export default CountryCard