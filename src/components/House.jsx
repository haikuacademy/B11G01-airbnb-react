import Gallery from './Gallery'

function House() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-10 rows-1 bg-pink-200">
          <div className="grid bg-pink-600">1</div>
          <Gallery />
        </div>
        <div className="grid grid-cols-3 gap-40 bg-pink-200">
          <div className="bg-pink-600 col-span-2">
            3
            <div className="flex grid-cols-2 grid=rows-2 gap-2 bg-blue-200">
              <div className="bg-blue-600">3.1</div>
              <div className="bg-blue-600">3.2</div>
            </div>
            <div className="flex grid-cols-2 grid-rows-1 gap-2 bg-blue-200">
              <div className="bg-blue-600">5.1</div>
              <div className="bg-blue-600">5.2</div>
            </div>
          </div>
          <div className=" bg-pink-600">
            4
            <div className="flex grid-cols-2 grid-rows-2 justify-between gap-2 bg-blue-200">
              <div className="flex bg-blue-600">5.1</div>
              <div className="flex bg-blue-600">5.2</div>
            </div>
            <div className="bg-pink-600">6</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default House
