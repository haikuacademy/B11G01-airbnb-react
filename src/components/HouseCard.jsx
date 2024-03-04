import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function formatDate(dateString) {
  const date = new Date(dateString)
  const options = { day: 'numeric', month: 'short', year: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

function HouseCard({ booking, listing }) {
  return (
    <Link to="/houses/1" className="hover:text-blue-300">
      <div className="border rounded p-2 m-1">
        <img
          src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png
"
          alt="House photo"
          className="rounded"
        ></img>
        <span className="text-lg font-bold">Phuket, Thailand</span>
        <div className="flex text-sm justify-left gap-1 font-extralight">
          <span>2 rooms</span>
          <span>·</span>
          <span>2 bathrooms</span>
        </div>
        <div className="pt-2">
          <span className="text-lg font-bold">$120</span>
        </div>
        <div className="pt-2">
          <div className="flex justify-between">
            <div>
              <FontAwesomeIcon
                icon={faStar}
                className="absolute mt-1 mr-4 pointer-events-none text-yellow-500"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="absolute mt-1 ml-5 pointer-events-none text-yellow-500"
              />
              <div className="pl-11">2</div>
            </div>
            <div className="mr-5">
              34
              <FontAwesomeIcon
                icon={faCommentDots}
                className="absolute mt-1 ml-1 pointer-events-none"
              />
            </div>
          </div>
        </div>
        {booking && (
          <div className="bg-green-100 p-2 mt-2 flex flex-col items-center">
            <p className="text-black">{formatDate(booking.startDate)} - {formatDate(booking.endDate)}</p>
            <p className="text-black font-bold">{booking.totalNights} nights = ${booking.totalPrice}</p>
          </div>
        )}
         {listing && (
          <div className="bg-white-200 p-2 mt-2 flex justify-center rounded">
            <div className="bg-white p-2 mx-1 rounded border">
              <Link to="/view-listing/1" className="text-black">View</Link>
              </div>
            <div className="bg-white p-2 mx-1 rounded border">
              <Link to="/edit-listing/1" className="text-black ">Edit</Link>
              </div>
          </div>
        )}
      </div>
    </Link>
  )
}

export default HouseCard
