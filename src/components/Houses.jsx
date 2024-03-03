import Nav from './Nav'
import HouseCard from './HouseCard'
import Filters from './Filters'

const houses = [
  {
    location: 'City Center',
    rooms: 3,
    bathrooms: 2,
    price: 250000,
    rating: 4.8,
    reviews: 15,
    photo: 'https://example.com/house1_photo.jpg'
  },
  {
    location: 'Suburban Area',
    rooms: 4,
    bathrooms: 3,
    price: 350000,
    rating: 4.5,
    reviews: 10,
    photo: 'https://example.com/house2_photo.jpg'
  },
  {
    location: 'Countryside',
    rooms: 5,
    bathrooms: 4,
    price: 500000,
    rating: 4.9,
    reviews: 20,
    photo: 'https://example.com/house3_photo.jpg'
  }
]

function Houses() {
  return (
    /* search bar */
    <div className="container mx-auto">
      <Nav />
      {/* search bar */}
      <Filters />
      {/* gallery */}
      <div className="grid gap-2 grid-cols-5">
        {houses.map((house, index) => )}
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
    </div>
  )
}

export default Houses
