import Nav from './Nav'
import Gallery from './Gallery'
import Review from './Review'
import LeaveReview from './LeaveReview'

import axios from 'axios'
import { useState, useEffect } from 'react'

function House() {
  const [house, setHouse] = useState(undefined)
  const getHouse = async () => {
    let { data } = await axios.get('https://haiku-bnb.onrender.com/houses/1')
    setHouse(data)
  }
  useEffect(() => {
    getHouse()
  }, [])

  // if (house === undefined) {
  //   return <div>loading</div>
  // }    
  // comment code above, this is used when you dont render the house and dont use the nuances operator(?.)
  // In the code below, the optional chaining operator (?.) is used to access nested properties such as house.location, house.host.picture, house.host.firstName, etc. 
  // This ensures that if any of these properties are null or undefined, the expression evaluates to undefined instead of throwing an error.


  return (
    <div className="container mx-auto">
      <Nav />
      {house && <Gallery images={house.images} />}
      <div className="grid grid-cols-3 gap-40 ml-2 p-2">
        <div className="col-span-2">
          <div className="pb-4">
            <span className="text-xl font-bold">{house?.location}</span>
            <div class="flex text-xs text-slate-400 justify-left gap-1">
              <span>{house?.rooms} rooms</span>
              <span>·</span>
              <span>{house?.bathrooms} bathrooms</span>
            </div>
          </div>
          <div className="flex grid-cols-2 grid=rows-2 gap-2 p-2">
            <div>
              <img
                src={house?.host.picture}
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
                  {house?.host.firstName} {house?.host.lastName}
                </span>
              </div>
            </div>
          </div>
          <div className="flex text-sm mb-10">{house?.description}</div>
          <div className="flex grid-cols-2 gap-2">
            <Review />
          </div>
        </div>
        <div className="">
          <div className="border rounded p-3 m-1">
            <div className="pb-2">
              <span className="font-bold">${house?.nightlyPrice}</span>
              <span className="text-xs font-bold text-slate-400"> / night</span>
            </div>
            <div className="flex">
              <div className="flex justify-start pr-1 flex-col">
                <label className="text-sm font-thin text-gray-400">
                  Check in
                </label>
                <input className="border rounded p-2 gap-2" type="date" value={startDate} onChange={startingDate} />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-thin text-gray-400">
                  Check out
                </label>
                <input className="border rounded p-2" type="date" value={endDate} onChange={endingDate} />
              </div>
            </div>
            <textarea
              rows="7"
              className="border rounded w-full mt-1 pt-1 pl-2"
              placeholder="Please send a message to the host..."
            ></textarea>
            <div class="flex justify-between items-center gap-1">
              <div className="flex justify-start pl-2">
                <div className="flex pr-1">{house?.totalNights} nights =</div>
                <div className="flex font-bold">${house?.totalPrice}</div>
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
