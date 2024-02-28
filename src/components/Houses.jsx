import Nav from './Nav'

function Houses() {
  return (
    <>
      {/* search bar */}
      <Nav />
      <div className="flex justify-between gap-1 bg-blue-200">
        <div className="flex bg-blue-600">1</div>
        <div className="flex bg-blue-600">2</div>
        <div className="flex bg-blue-600">3</div>
        <div className="flex bg-blue-600">4</div>
        <div className="flex bg-blue-600">5</div>
        <div className="flex bg-blue-600">6</div>
      </div>
      {/* gallery */}
      <div className="grid gap-2 grid-cols-5 bg-pink-200">
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

export default Houses
