import Nav from './Nav'
import HouseCard from './HouseCard'

const bookings = [
  {
    location: 'City Center',
    rooms: 3,
    bathrooms: 2,
    nightlyPrice: 50,
    rating: 4.8,
    reviews: 15,
    photo: 'https://example.com/house1_photo.jpg',
    startDate: '2024-04-01',
    endDate: '2024-04-03',
    totalNights: 3,
    totalPrice: 150
  },
  {
    location: 'Suburban Area',
    rooms: 4,
    bathrooms: 3,
    nightlyPrice: 40,
    rating: 4.5,
    reviews: 10,
    photo: 'https://example.com/house2_photo.jpg',
    startDate: '2024-06-01',
    endDate: '2024-06-03',
    totalNights: 3,
    totalPrice: 150
  },
  {
    location: 'Countryside',
    rooms: 5,
    bathrooms: 4,
    nightlyPrice: 85,
    rating: 4.9,
    reviews: 20,
    photo: 'https://example.com/house3_photo.jpg',
    startDate: '2024-11-22',
    endDate: '2024-11-29',
    totalNights: 3,
    totalPrice: 150
  }
]

function Bookings() {
  return (
    <div className="container mx-auto">
      <Nav />
      {/* listings gallery */}
      <div className="grid gap-2 grid-cols-5">
        {bookings.map((booking, index) => (
        <HouseCard
          key = { index }
          location = { booking.location }
          rooms = { booking.rooms }
          bathrooms = { booking.bathrooms }
          nightlyPrice = { booking.nightlyPrice }
          rating = {booking.rating}
          reviews = {booking.reviews}
          photo = {booking.photo}
          startDate = {booking.startDate}
          endDate = {booking.endDate}
          totalNights = {booking.totalNights}
          totalPrice = {booking.totalPrice}
            booking={true}
            {...booking}
           />
        ))}
      </div>
    </div>
  )
}

export default Bookings
