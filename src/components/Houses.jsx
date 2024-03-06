import Nav from './Nav'
import HouseCard from './HouseCard'
import Filters from './Filters'
import axios from 'axios'
import { useState } from 'react'


function Houses() {
  const [houses, setHouses] = useState([])

  const getHouses = async () => {
    let { data } = await axios.get('http://localhost:3000/houses')
    setHouses(data)
  }
  return (
    /* search bar */
    <div className="container mx-auto">
      <Nav />
      {/* search bar */}
      <Filters />
      {/* gallery */}
      <div className="grid gap-2 grid-cols-5">
        {houses.map((house, index) => (
          <HouseCard house={house} />
        ))}
      </div>
    </div>
  )
}

export default Houses
