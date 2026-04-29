import { useState } from 'react'
import FilterBar from '../components/FilterBar'
// import CountryCard, SearchBar, etc.

function Home() {
  const [countries, setCountries] = useState([])

  // 1. new state
  const [region, setRegion] = useState('All')
  const [sortBy, setSortBy] = useState('')

  // 3. derived data (IMPORTANT)
  const displayed = [...countries] // clone to avoid mutation
    .filter((c) => region === 'All' || c.region === region)
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.common.localeCompare(b.name.common)
      }
      if (sortBy === 'population') {
        return b.population - a.population
      }
      return 0
    })

  return (
    <div>
      {/* existing SearchBar */}

      {/* 2. FilterBar */}
      <FilterBar
        region={region}
        onRegionChange={setRegion}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* 4. render displayed */}
      <div className="cards-grid">
        {displayed.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  )
}

export default Home