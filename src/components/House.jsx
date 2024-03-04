import Nav from './Nav'
import Gallery from './Gallery'
import Review from './Review'
import LeaveReview from './LeaveReview'

function House() {
  const house = {
    location: 'Beautiful City, Country',
    rooms: 3,
    bathrooms: 2,
    description: 'Cozy and spacious house in a prime location.',
    nightlyPrice: 60,
    totalNights: 3,
    totalPrice: 180,
    rating: 4.5,
    host: {
      firstName: 'Juan',
      lastName: 'Doe',
      picture: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    images: [
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_03.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_04.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_07.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png',
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_09.png'
    ]
  }
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid grid-cols-2 gap-10 rows-1 p-2">
        <div className="grid">
          <img src={house.images[0]} alt="House" className="rounded-md" />
        </div>
        <Gallery />
      </div>
      <div className="grid grid-cols-3 gap-40 ml-2 p-2">
        <div className="col-span-2">
          <div className="pb-4">
            <span className="text-xl font-bold">{house.location}</span>
            <div class="flex text-xs text-slate-400 justify-left gap-1">
              <span>{house.rooms} rooms</span>
              <span>·</span>
              <span>{house.bathrooms} bathrooms</span>
            </div>
          </div>
          <div className="flex grid-cols-2 grid=rows-2 gap-2 p-2">
            <div>
              <img
                src={house.host.picture}
                alt="Host"
                className="w-8 rounded-full"
              ></img>
            </div>
            <div className="pb-4">
              <span class="flex text-xs text-slate-400 justify-left gap-1">
                Hosted by
              </span>
              <div class="flex text-sm justify-left gap-1">
                <span>
                  {house.host.firstName} {house.host.lastName}
                </span>
              </div>
            </div>
          </div>
          <div className="flex text-sm mb-10">{house.description}</div>
          <div className="flex grid-cols-2 gap-2">
            <Review />
          </div>
        </div>
        <div className="">
          <div className="border rounded p-3 m-1">
            <div className="pb-2">
              <span className="font-bold">${house.nightlyPrice}</span>
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
                <div className="flex pr-1">{house.totalNights} nights =</div>
                <div className="flex font-bold">${house.totalPrice}</div>
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
