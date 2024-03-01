import Nav from './Nav'
import Gallery from './Gallery'
import Review from './Review'

function House() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid grid-cols-2 gap-10 rows-1 p-2">
        <div className="grid">
          <img
            src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png"
            alt="House"
            className="rounded-md"
          />
        </div>
        <Gallery />
      </div>
      <div className="grid grid-cols-3 gap-40 ml-2 p-2">
        <div className="col-span-2">
          <div className="pb-4">
            <span className="text-xl font-bold">Phuket, Thailand</span>
            <div class="flex text-xs text-slate-400 justify-left gap-1">
              <span>2 rooms</span>
              <span>·</span>
              <span>2 bathrooms</span>
            </div>
          </div>
          <div className="flex grid-cols-2 grid=rows-2 gap-2 p-2">
            <div>
              <img
                src="https://randomuser.me/api/portraits/women/85.jpg"
                alt="Host"
                className="w-8 rounded-full"
              ></img>
            </div>
            <div className="pb-4">
              <span class="flex text-xs text-slate-400 justify-left gap-1">
                Hosted by
              </span>
              <div class="flex text-sm justify-left gap-1">
                <span>Linda Smith</span>
              </div>
            </div>
          </div>
          <div className="flex text-sm mt-6 mb-6">
            This is a house description. You can come here to get away from
            technology, which is killing our planet and making society deeply
            unhappy. Escape to reality. We have plenty of grass to touch.
          </div>
          <div className="flex grid-cols-2 gap-2">
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
        </div>
      </div>
    </div>
  )
}

export default House
