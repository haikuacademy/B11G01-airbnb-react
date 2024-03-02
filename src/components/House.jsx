import Nav from './Nav'
import Gallery from './Gallery'
import Review from './Review'
import LeaveReview from './LeaveReview'

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
          <div className="flex text-sm mb-10">
            This is a house description. You can come here to get away from
            technology, which is killing our planet and making society deeply
            unhappy. Escape to reality. We have plenty of grass to touch.
          </div>
          <div className="flex grid-cols-2 gap-2">
            <Review />
          </div>
        </div>
        <div className="">
          <div className="border rounded p-3 m-1">
            <div className="pb-2">
              <span className="font-bold">$120</span>
              <span className="text-xs font-bold text-slate-400"> / night</span>
            </div>
            <div className="flex">
              <div className="flex justify-start pr-1 flex-col">
                <label className="text-sm font-thin text-gray-400">
                  Check in
                </label>
                <input className="border rounded p-2 gap-2" type="date" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-thin text-gray-400">
                  Check out
                </label>
                <input className="border rounded p-2" type="date" />
              </div>
            </div>
            <textarea
              rows="7"
              className="border rounded w-full mt-1 pt-1 pl-2"
              placeholder="Please send a message to the host..."
            ></textarea>
            <div class="flex justify-between items-center gap-1">
              <div className="flex justify-start pl-2">
                <div className="flex pr-1">3 nights =</div>
                <div className="flex font-bold">$360</div>
              </div>

              <div className="flex justify-end">
                <button className="flex justify-end border bg-red-400  text-white rounded p-3 py-2">
                  {' '}
                  Reserve
                </button>
              </div>
            </div>
          </div>
          <div>
            <LeaveReview />
          </div>
        </div>
      </div>
    </div>
  )
}

export default House
