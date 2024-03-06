import Nav from './Nav'
import { Link } from 'react-router-dom'

const house = {
  location: 'Beautiful City, Country',
  rooms: 3,
  bathrooms: 2,
  description: 'Cozy and spacious house in a prime location',
  price: 60,
  rating: 4.5,
  host: {
    firstName: 'John',
    lastName: 'Doe',
    picture: 'https://example.com/john_doe_picture.jpg'
  },
  images: [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image4.jpg',
    'https://example.com/image5.jpg',
    'https://example.com/image6.jpg',
    'https://example.com/image7.jpg',
    'https://example.com/image8.jpg',
    'https://example.com/image9.jpg'
  ]
}

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
            placeholder={house.location}
            className="border w-full p-2 rounded"
          />
          {/* Bedrooms */}
          <div className="text-sm text-gray-300 pt-2">Bedrooms</div>
          <input
            type="number"
            placeholder={house.rooms}
            className="border w-full p-2 rounded"
          />
          {/* Bathrooms */}
          <div className="text-sm text-gray-300 pt-2">Bathrooms</div>
          <input
            type="number"
            placeholder={house.bathrooms}
            className="border w-full p-2 rounded"
          />
          {/* Price per Night */}
          <div className="text-sm text-gray-300 pt-2">Price per Night</div>
          <input
            type="number"
            placeholder={house.price}
            className="border w-full p-2 rounded"
          />
          {/* Description */}
          <div className="text-sm text-gray-300 pt-2">Description</div>
          <textarea
            className="border w-full p-2 rounded"
            placeholder={house.description}
          ></textarea>
          <div className="flex justify-left gap-2">
            <button className="flex border rounded px-2 pt-2 pb-2 text-sm bg-red-400 text-white mt-4">
              Save Changes
            </button>
            {/* Linking cancel button to listings*/}
            <Link
              to="/listings"
              className="flex border rounded px-2 pt-2 pb-2 text-sm mt-4"
            >
              Cancel
            </Link>
          </div>
        </form>
        <div className="">
          {/* Photos */}
          <div className="text-sm text-gray-300">Photos</div>
          {house.images.map((image, index) => (
            <input
              key={index}
              type="text"
              placeholder={image}
              className="border w-full p-2 rounded"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HouseEdit
