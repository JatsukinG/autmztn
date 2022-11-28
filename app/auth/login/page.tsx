import React from 'react'

const Login = () => {
  return (
      <div className="w-screen h-screen flex justify-center items-center">
        <form className="w-1/3 bg-white px-14 py-8 text-center rounded-2xl shadow-2xl">
          <h2 className="text-2xl text-gray-500 font-bold">LOGIN</h2>
          <input
              type="text"
              placeholder="Username..."
              className="bg-transparent outline-none border-b-2 focus:border-blue-200 my-2 w-full py-2 mt-8"
          />
          <input
              type="password"
              placeholder="Password.."
              className="bg-transparent outline-none border-b-2 focus:border-blue-200 my-2 w-full py-2 mt-4"
          />
          <button className="bg-gray-400 text-white font-bold py-2 px-4 rounded-3xl mt-8 hover:bg-gray-600 duration-500">
            Submit
          </button>
        </form>
      </div>
  )
}

export default Login