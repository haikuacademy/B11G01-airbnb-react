import Nav from './Nav'
import HouseCard from './HouseCard'

function Bookings() {
  return (
    <div className="container mx-auto">
      <Nav />
      {/* listings gallery */}
      <div className="grid gap-2 grid-cols-5">
        <HouseCard />
        <HouseCard />
      </div>
    </div>
  )
}


export default Bookings
