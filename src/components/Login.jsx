function Login() {
  return (
    <div className="border mx-auto justify-center m-5 w-80 text-gray-400 p-4">
      <img
        className="w-24 mx-auto"
        src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
        alt="logo"
      ></img>
      <form action="" className="space-y-2">
        <div>
          <div>Email</div>
          <input type="email" className="border rounded w-full  p-1" />
        </div>
        <div>
          <div>Password</div>
          <input type="password" className="border rounded w-full p-1" />
        </div>
        <div>
          <button className="border bg-red-400  text-white rounded w-full justify-center p-4 py-2 mt-2">
            {' '}
            Login
          </button>
        </div>
      </form>
      <div>
        <div className="flex items-center justify-betwen mt-2" />
        <p className=" inline text-black">
          New to Airbnb?
          <span className="text-red-400 pl-2 underline">
            Create an account?
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
