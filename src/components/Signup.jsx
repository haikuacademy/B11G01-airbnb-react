import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signup() {
  // State
  const [validEmail, setValidEmail] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // Functions

  const submitForm = async (e) => {
    e.preventDefault()

    const form = new FormData(e.target)
    const formData = Object.fromEntries(form.entries())

    console.log(formData)

    const response = await axios.post(
      'https://haiku-bnb.onrender.com/signup',
      formData
    )

    if (response.data.error) {
      setError(response.data.error)
    } else {
      navigate('/profile')
    }

    console.log(response.data)
  }

  return (
    <div className="border mx-auto justify-center m-5 w-80 text-gray-400 p-4">
      <img
        className="w-24 mx-auto"
        src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
        alt="logo"
      ></img>
      <form onSubmit={submitForm} className="space-y-2 p-2">
        <div>
          <div>First Name</div>
          <input
            name="first_name"
            type="text"
            className="border rounded w-full  p-1"
          />
        </div>
        <div>
          <div>Last Name</div>
          <input
            name="last_name"
            type="text"
            className="border rounded w-full  p-1"
          />
        </div>
        <div>
          <div>Email</div>
          {/* {!emailIsValid && <span>Invalid Email</span>} */}
          <input
            name="email"
            type="text"
            className="border rounded w-full  p-1"
          />
        </div>
        <div>
          <div>Password</div>
          <input
            name="password"
            type="password"
            className="border rounded w-full p-1"
          />
        </div>
        <div>
          <div>Profile Picture</div>
          <input
            name="picture"
            type="text"
            placeholder="https://..."
            className="border rounded w-full p-1"
          />
        </div>
        <div>
          <button className="border bg-red-400  text-white rounded w-full justify-center p-4 py-2 mt-2">
            {' '}
            Register
          </button>
        </div>
        <div>{error}</div>
      </form>
      <div>
        <div className="flex items-center justify-betwen mt-2" />
        <p className=" inline text-black">
          Already have an account?
          <span className="text-red-400 pl-2 underline">Log in here</span>
        </p>
      </div>
    </div>
  )
}

export default Signup
