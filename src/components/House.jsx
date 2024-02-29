import Nav from './Nav'
import Gallery from './Gallery'
import Review from './Review'

function House() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid grid-cols-2 gap-10 rows-1">
        <div className="grid">1</div>
        <Gallery />
      </div>
      <div className="grid grid-cols-3 gap-40">
        <div className="col-span-2">
          <div className="pb-4">
            <span className="text-xl font-bold">Phuket, Thailand</span>
            <div class="flex text-xs text-slate-400 justify-left gap-1">
              <span>2 rooms</span>
              <span>·</span>
              <span>2 bathrooms</span>
            </div>
          </div>
          <div className="flex grid-cols-2 grid=rows-2 gap-2 bg-blue-200">
            <div className="bg-blue-600">3.1</div>
            <div className="pb-4">
              <span class="flex text-xs text-slate-400 justify-left gap-1">
                Hosted by
              </span>
              <div class="flex text-sm justify-left gap-1">
                <span>Linda Smith</span>
              </div>
            </div>
          </div>
          <div className="flex grid-cols-2 grid-rows-1 gap-2 bg-blue-200">
            <Review />
            <Review />
          </div>
        </div>
        <div className="">
          <div className="border rounded p-2 m-1">
            <div>
              <span className="font-bold">$120</span>
              <span className="text-xs font-bold text-slate-400"> / night</span>
            </div>
            <div class="flex text-sm gap-1 justify-left">
              <span>3 nights =</span>
              <span className="font-bold">$360</span>
              <div>
                <span className="bg-blue-600 justify-end">4.2</span>
              </div>
            </div>
          </div>
          <div>
            <span className="bg-blue-600 justify-end">6</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default House
