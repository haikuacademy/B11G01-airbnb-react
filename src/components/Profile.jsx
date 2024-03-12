import Nav from './Nav'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// const dummyUser = {
//   firstName: 'John',
//   lastName: 'Jones',
//   email: 'john.jones@example.com',
//   picture: 'https://randomuser.me/api/portraits/women/69.jpg'
// }

function Profile() {
  const [user, setUser] = useState({})
  const [picture, setPicture] = useState(user.picture)
  const navigate = useNavigate()

  const logout = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.get('http://haiku-bnb.onrender.com/logout')
      console.log({ data })
      localStorage.removeItem('isLoggedIn')
      navigate('/')
    } catch (err) {
      alert(err.message)
    }
  }

  const getData = async () => {
    try {
      const response = await axios.get('http://haiku-bnb.onrender.com/profile')
      if (response.data.error) {
        navigate('/')
      } else {
        setUser(response.data)
        setPicture(response.data.picture)
      }
    } catch (e) {
      console.log(e)
      alert(e.message)
    }
  }

  const modifyUser = async (e) => {
    e.preventDefault()
    // alert('working')
    const form = new FormData(e.target)
    const formObj = Object.fromEntries(form.entries())
    try {
      const { data } = await axios.patch(
        'http://haiku-bnb.onrender.com/profile',
        formObj
      )
      console.log(data)
      alert('your changes have been saved')
    } catch (e) {
      alert(e.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid border w-full p-3 mt-2 rounded">
        <form onSubmit={modifyUser}>
          <div className="text-lg font-bold">Your Profile</div>
          <div className="flex cols-2 p-3 gap-3">
            <img src={picture} alt="User" className="w-12 rounded-full"></img>
            <input
              name="picture"
              type="text"
              value={picture}
              className="border w-full p-2 rounded"
              onChange={(e) => setPicture(e.target.value)}
            />
          </div>
          <div className="text-sm text-gray-400 pt-2">First Name</div>
          <input
            name="first_name"
            type="text"
            defaultValue={user.first_name}
            className="border w-full p-2 rounded"
            placeholder={'First Name'}
          />
          <div className="text-sm text-gray-400 pt-2">Last Name</div>
          <input
            name="last_name"
            type="text"
            defaultValue={user.last_name}
            className="border w-full p-2 rounded"
            placeholder={'Last Name'}
          />
          <div className="text-sm text-gray-400 pt-2">Email</div>
          <input
            name="email"
            type="text"
            defaultValue={user.email}
            className="border w-full p-2 rounded"
            placeholder={'example@example.com'}
          />
          <div className="flex justify-between gap-2">
            <button className="flex border rounded px-2 pt-2 pb-2 text-sm bg-red-400 text-white mt-4">
              Save Changes
            </button>
            <button
              className="flex border rounded px-2 pt-2 pb-2 text-sm mt-4"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
