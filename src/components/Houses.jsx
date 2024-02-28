import Nav from './Nav'
import HouseCard from './HouseCard'
import Filters from './Filters'

function Houses() {
  return (
    /* search bar */
    <div className="container mx-auto">
      <Nav />
      {/* search bar */}
      <Filters />
      {/* gallery */}
      <div className="grid gap-2 grid-cols-5">
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
