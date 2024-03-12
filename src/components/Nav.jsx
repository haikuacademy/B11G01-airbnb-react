import { Link } from 'react-router-dom'

function Nav() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  // const isLoggedIn = false

  return (
    <div className="flex justify-between items-center p-3 mb-1">
      <Link to="/" className="flexbox items-start">
        <img
          className="w-24 mx-auto justify-start"
          src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
          alt="logo"
        />
      </Link>
      <div className="inline-flex gap-2 pr-3 ">
        {isLoggedIn ? (
          <>
            <Link
              to="/bookings"
              className="button border rounded p-1 hover:border-red-400 p-2"
            >
              My Bookings
            </Link>
            <Link
              to="/listings"
              className="button border rounded p-1 hover:border-red-400 p-2"
            >
              My Listings
            </Link>
            <Link
              to="/profile"
              className="button border rounded p-1 items-center hover:border-red-400 p-2"
            >
              <img
                className="inline w-5 h-5 rounded-full mr-1 mb-1"
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="user"
              />
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="border rounded px-2 py-2 border-rose-300"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Nav
