import HouseCard from './HouseCard'

function Listings() {
  return (
    <>
      {/* add new listing */}
      <div className="grid gap-40 grid-cols-2 bg-pink-200">
        <div className="grid bg-pink-600">1</div>
        <div className="grid bg-pink-600">2</div>
      </div>
      {/* listings gallery */}
      <div className="grid gap-4 grid-cols-5 bg-pink-200">
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

export default Listings
