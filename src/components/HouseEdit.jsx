import Nav from './Nav'
import { Link } from 'react-router-dom'

function HouseEdit() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid grid-cols-2 gap-3 border w-full p-3 mt-2 rounded">
        <form>
          {/* Location */}
          <div>Edit your Listing</div>
          <div className="text-sm text-gray-300 pt-2">Location</div>
          <input
            type="text"
            placeholder="Bali"
            className="border w-full p-2 rounded"
          />
          {/* Bedrooms */}
          <div className="text-sm text-gray-300 pt-2">Bedrooms</div>
          <input
            type="number"
            placeholder="3"
            className="border w-full p-2 rounded"
          />
          {/* Bathrooms */}
          <div className="text-sm text-gray-300 pt-2">Bathrooms</div>
          <input
            type="number"
            placeholder="2"
            className="border w-full p-2 rounded"
          />
          {/* Price per Night */}
          <div className="text-sm text-gray-300 pt-2">Price per Night</div>
          <input
            type="number"
            placeholder="140"
            className="border w-full p-2 rounded"
          />
          {/* Description */}
          <div className="text-sm text-gray-300 pt-2">Description</div>
          <textarea
            className="border w-full p-2 rounded"
            placeholder="This enchanting Airbnb villa in Bali..."
          ></textarea>
          <div className="flex justify-left gap-2">
            <button className="flex border rounded px-2 pt-2 pb-2 text-sm bg-red-400 text-white mt-4">
              Save Changes
            </button>
            {/* Linking cancel button to listings*/}
            <Link to="/listings" className="flex border rounded px-2 pt-2 pb-2 text-sm mt-4">
              Cancel
            </Link>
          </div>
        </form>
        <div className="">
          {/* Photos */}
          <div className="text-sm text-gray-300">Photos</div>
          <input
            type="text"
            placeholder="ImageURL.png"
            className="border w-full p-2 rounded"
          />
          <input
            type="text"
            placeholder="ImageURL.png"
            className="border w-full p-2 rounded mt-2"
          />
          <input
            type="text"
            placeholder="ImageURL.png"
            className="border w-full p-2 rounded mt-2"
          />
          <input
            type="text"
            placeholder="ImageURL.png"
            className="border w-full p-2 rounded mt-2"
          />
          <input
            type="text"
            placeholder="ImageURL.png"
            className="border w-full p-2 rounded mt-2"
          />
          <input
            type="text"
            placeholder="ImageURL.png"
            className="border w-full p-2 rounded mt-2"
          />
          <input
            type="text"
            placeholder="ImageURL.png"
            className="border w-full p-2 rounded mt-2"
          />
        </div>
      </div>
    </div>
  )
}

export default HouseEdit
