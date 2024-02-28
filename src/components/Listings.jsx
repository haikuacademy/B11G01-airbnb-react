import Nav from './Nav'
import HouseCard from './HouseCard'

function Listings() {
  return (
    <div className="container mx-auto">
      {/* add new listing */}
      <Nav />
      <div className="grid gap-40 grid-cols-2">
        <div className="grid">1</div>
        <div className="grid">2</div>
      </div>
      {/* listings gallery */}
      <div className="grid gap-4 grid-cols-5">
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

export default Listings
