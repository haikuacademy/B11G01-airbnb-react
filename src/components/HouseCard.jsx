import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function formatDate(dateString) {
  const date = new Date(dateString)
  const options = { day: 'numeric', month: 'short', year: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

function HouseCard(props) {
  const rating = props.house.rating
  const numberOfStars = Math.floor(rating)

  console.log(numberOfStars)

  return (
    <Link to="/houses/1>">
      <div className="border rounded p-2 m-1">
        <img src={props.house.photo} alt="House" className="rounded" />
        <span className="text-lg font-bold">{props.house.location}</span>
        <div class="flex text-sm justify-left gap-1 font-extralight">
          <span>{props.house.rooms} rooms</span>
          <span>·</span>
          <span>{props.house.bathrooms} bathrooms</span>
        </div>
        <div className="pt-2">
          <span className="text-lg font-bold">${props.house.price}</span>
        </div>
        <div className="pt-2">
          <div class="flex justify-between">
            <div className="flex gap-0 items-center">
              {[...new Array(numberOfStars)].map((val, index) => (
                <FontAwesomeIcon
                  icon={faStar}
                  key={index}
                  className="pointer-events-none text-yellow-500"
                />
              ))}
              <div className="ml-2">{rating}</div>
            </div>
            <div className="flex gap-1 items-center">
              {props.house.reviews}
              <FontAwesomeIcon
                icon={faCommentDots}
                className="pointer-events-none"
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
