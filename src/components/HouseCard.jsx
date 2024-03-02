import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function HouseCard() {
  return (
    <Link to="/houses/1>" className="hover:text-blue-300">
      <div className="border rounded p-2 m-1">
        <img
          src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png
"
          alt="House photo"
          className="rounded"
        ></img>
        <span className="text-lg font-bold">Phuket, Thailand</span>
        <div class="flex text-sm justify-left gap-1 font-extralight">
          <span>2 rooms</span>
          <span>·</span>
          <span>2 bathrooms</span>
        </div>
        <div className="pt-2">
          <span className="text-lg font-bold">$120</span>
        </div>
        <div className="pt-2">
          <div class="flex justify-between">
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
           <div className="bg-green-100 p-2 mt-2 flex justify-center items-center">
            <p className="text-black">night stays</p>
          </div>
      </div>
    </Link>
  )
}

export default HouseCard
