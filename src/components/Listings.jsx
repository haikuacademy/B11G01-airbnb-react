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
        <div className="grid bg-pink-600">1</div>
        <div className="grid bg-pink-600">2</div>
        <div className="grid bg-pink-600">3</div>
        <div className="grid bg-pink-600">4</div>
        <div className="grid bg-pink-600">5</div>
        <div className="grid bg-pink-600">6</div>
        <div className="grid bg-pink-600">7</div>
      </div>
    </>
  )
}

export default Listings
