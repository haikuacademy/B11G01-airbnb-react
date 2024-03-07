import Nav from './Nav'
import HouseCard from './HouseCard'
import Filters from './Filters'
import axios from 'axios'
import { useState, useEffect } from 'react'


function Houses() {
  const [houses, setHouses] = useState([])

  const getHouses = async () => {
    let { data } = await axios.get('https://haiku-bnb.onrender.com/houses')
    setHouses(data)
  }
  useEffect(() => {
    getHouses()
  }, [])

  return (
    /* search bar */
    <div className="container mx-auto">
      <Nav />
      {/* search bar */}
      <Filters />
      {/* gallery */}
      <div className="grid gap-2 grid-cols-5">
        {houses.map((house, index) => (
          <HouseCard key={index} house={house} />
        ))}
      </div>

    </div>
  )
}

export default Houses
