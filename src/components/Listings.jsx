import Nav from './Nav'
import HouseCard from './HouseCard'

const houseData = [
  {
    location: 'City Center',
    rooms: 3,
    bathrooms: 2,
    nightlyPrice: 50,
    rating: 4.8,
    reviews: 15,
    photo: 'https://example.com/house1_photo.jpg',
    startDate: '2024-04-01',
    endDate: '2024-04-03',
    totalNights: 2,
    totalPrice: 100
  },

  {
    location: 'Suburban Area',
    rooms: 4,
    bathrooms: 3,
    nightlyPrice: 40,
    rating: 4.5,
    reviews: 10,
    photo: 'https://example.com/house2_photo.jpg',
    startDate: '2024-06-01',
    endDate: '2024-06-03',
    totalNights: 2,
    totalPrice: 80
  },

  // Add more house objects as needed

];
function Listings() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid grid-cols-2 gap-3 border w-full p-3 mt-2 mb-2 rounded">
        <form>
          {/* Location */}
          <div>List a House</div>
          <div className="text-sm text-gray-300 pt-2">Location</div>
          <input type="text" className="border w-full p-2 rounded" />
          {/* Bedrooms */}
          <div className="text-sm text-gray-300 pt-2">Bedrooms</div>
          <input type="number" className="border w-full p-2 rounded" />
          {/* Bathrooms */}
          <div className="text-sm text-gray-300 pt-2">Bathrooms</div>
          <input type="number" className="border w-full p-2 rounded" />
          {/* Price per Night */}
          <div className="text-sm text-gray-300 pt-2">Price per Night</div>
          <input type="number" className="border w-full p-2 rounded" />
          {/* Description */}
          <div className="text-sm text-gray-300 pt-2">Description</div>
          <textarea className="border w-full p-2 rounded"></textarea>
          <div className="flex justify-left gap-2">
            <button className="flex border rounded px-2 pt-2 pb-2 text-sm bg-red-400 text-white mt-4">
              Save Changes
            </button>
            <button className="flex border rounded px-2 pt-2 pb-2 text-sm mt-4">
              Cancel
            </button>
          </div>
        </form>
        <div className="">
          {/* Photos */}
          <div className="text-sm text-gray-300">Photos</div>
          <input type="text" className="border w-full p-2 rounded" />
          <input type="text" className="border w-full p-2 rounded mt-2" />
          <input type="text" className="border w-full p-2 rounded mt-2" />
          <input type="text" className="border w-full p-2 rounded mt-2" />
          <input type="text" className="border w-full p-2 rounded mt-2" />
          <input type="text" className="border w-full p-2 rounded mt-2" />
          <input type="text" className="border w-full p-2 rounded mt-2" />
        </div>
      </div>
      {/* listings gallery */}
      <div className="grid gap-4 grid-cols-5">
        {houseData.map((house, index) => 
          <HouseCard key={index} house={house} listing={true} />
 )}
      </div>
    </div>
  )
}

export default Listings
