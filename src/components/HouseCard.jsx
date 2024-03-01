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
      <div class="flex text-sm justify-left gap-1">
        <span>2 rooms</span>
        <span>·</span>
        <span>2 bathrooms</span>
      </div>
      <div className="pt-2">
        <span className="text-lg font-bold">$120</span>
      </div>
      <div className="pt-2">
        <div class="flex justify-between">
          <span>4.5</span>
          <span>34</span>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default HouseCard
