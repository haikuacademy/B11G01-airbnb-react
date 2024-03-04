import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

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
      </div>
    </Link>
  )
}

export default HouseCard
