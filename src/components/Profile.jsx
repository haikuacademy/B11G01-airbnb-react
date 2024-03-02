import Nav from './Nav'

const user = {
  firstName: 'John',
  lastName: 'Jones',
  email: 'john.jones@example.com',
  picture: 'https://example.com/john_jones_picture.jpg'
}

function Profile() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid border w-full p-3 mt-2 rounded">
        <form>
          <div className="text-lg font-bold">Your Profile</div>
          <div className="flex cols-2 p-3 gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/69.jpg"
              alt="User"
              className="w-12 rounded-full"
            ></img>
            <input type="text" className="border w-full p-2 rounded" />
          </div>
          <div className="text-sm text-gray-400 pt-2">First Name</div>
          <input type="text" className="border w-full p-2 rounded" />
          <div className="text-sm text-gray-400 pt-2">Last Name</div>
          <input type="text" className="border w-full p-2 rounded" />
          <div className="text-sm text-gray-400 pt-2">Email</div>
          <input type="text" className="border w-full p-2 rounded" />
          <div className="flex justify-between gap-2">
            <button className="flex border rounded px-2 pt-2 pb-2 text-sm bg-red-400 text-white mt-4">
              Save Changes
            </button>
            <button className="flex border rounded px-2 pt-2 pb-2 text-sm mt-4">
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
