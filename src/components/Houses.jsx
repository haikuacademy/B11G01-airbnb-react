import Nav from './Nav'
import HouseCard from './HouseCard'
import Filters from './Filters'
import { useEffect, useState } from 'react'

const houses = [
  {
    location: 'Bangkok',
    rooms: 3,
    bathrooms: 2,
    price: 250,
    rating: 4.8,
    reviews: 15,
    photo:
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_07.png'
  },
  {
    location: 'Koh Samui',
    rooms: 4,
    bathrooms: 3,
    price: 30,
    rating: 3.5,
    reviews: 10,
    photo:
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png'
  },
  {
    location: 'Madrid',
    rooms: 5,
    bathrooms: 4,
    price: 50,
    rating: 2.9,
    reviews: 20,
    photo:
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_09.png'
  }
]

function Houses() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [nights, setNights] = useState(0)

  function startingDate(event) {
    setStartDate(event)
  }
  function endingDate(event) {
    setEndDate(event)
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
