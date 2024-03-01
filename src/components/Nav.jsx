import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="flex justify-between items-center p-3 mb-3">
      <Link to="/" className="flexbox items-start">
        <img
          className="w-24 mx-auto justify-start"
          src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
          alt="logo"
        />
      </Link>
      <div className="inline-flex gap-2 pr-3 ">
        <Link
          to="/bookings"
          className="button border rounded p-1 hover:border-red-400"
        >
          My Bookings
        </Link>
        <Link
          to="/listings"
          className="button border rounded p-1 hover:border-red-400"
        >
          My Listings
        </Link>
        <Link
          to="/profile"
          className="button border rounded p-1 items-center hover:border-red-400"
        >
          <img
            className="inline w-4 h-4 rounded-full ml-1"
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="user"
          />
          Profile
        </Link>
      </div>
    </div>
  )
}

export default Nav
