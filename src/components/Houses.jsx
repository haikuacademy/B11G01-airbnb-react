import HouseCard from './HouseCard'
import Filters from './Filters'

function Houses() {
  return (
    <>
      {/* filters */}
      <div className="flex justify-between gap-1 bg-blue-200">
        <Filters />
        <Filters />
        <Filters />
        <Filters />
        <Filters />
        <Filters />
      </div>
      {/* gallery */}
      <div className="grid gap-2 grid-cols-5 bg-pink-200">
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
    </>
  )
}

export default Houses
