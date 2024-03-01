import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faBed,
  faDollarSign,
  faSort
} from '@fortawesome/free-solid-svg-icons'

function Filters() {
  return (
    <form className="flex rounded bg-gray-200 justify-between p-2 mt-2 mb-2 gap-3 text-sm align-left">
      {/* Location */}
      <div className="w-full">
        <FontAwesomeIcon
          icon={faHouse}
          className="absolute mt-3 ml-3 pointer-events-none"
        />
        <select className="border w-full p-2 rounded pl-9">
          <option selected>Any Location</option>
          <option>Thailand</option>
          <option>Italy</option>
          <option>Ireland</option>
          <option>Morocco</option>
        </select>
      </div>
      {/* Rooms */}
      <div className="w-full">
        <FontAwesomeIcon
          icon={faBed}
          className="absolute mt-3 ml-3 pointer-events-none"
        />
        <select className="border w-full p-2 rounded pl-10">
          <option selected>Any Rooms</option>
          <option>1 room</option>
          <option>2 rooms</option>
          <option>3 rooms</option>
          <option>4 rooms</option>
          <option>5 rooms</option>
        </select>
      </div>
      {/* Max Price */}
      <div className="w-full">
        <FontAwesomeIcon
          icon={faDollarSign}
          className="absolute mt-3 ml-3 pointer-events-none"
        />
        <input
          type="number"
          placeholder="max price"
          className="border w-full p-2 rounded pl-7"
        />
      </div>
      {/* Sort By */}
      <div className="w-full">
        <FontAwesomeIcon
          icon={faSort}
          className="absolute mt-3 ml-3 pointer-events-none"
        />
        <select className="border w-full p-2 rounded pl-7">
          <option selected>sort by</option>
          <option>Price High to Low</option>
          <option>Price Low to High</option>
          <option>Number of Rooms</option>
        </select>
      </div>
      {/* Keywords Search */}
      <div className="w-full">
        <input
          type="text"
          placeholder="keywords..."
          className="border rounded p-2 w-full"
        />
      </div>
      {/* Search Button */}
      <button className="border rounded px-2 bg-red-400 text-white">
        Search
      </button>
    </form>
  )
}

export default Filters
