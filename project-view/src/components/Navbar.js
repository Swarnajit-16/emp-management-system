import React from 'react'

const Navbar = () => {
  return (
    <div>
       <div className="bg-cyan-600 h-16 px-10 py-1 items-center flex">
      <h1 className="text-4xl font-bold text-lime-950"> 🧑‍💻Employee Service</h1>
      <div className="space-x-6 ml-auto text-cyan-950 font-bold">
        <a className="hover:text-cyan-800" href="/">Home</a>
        <a className="hover:text-cyan-800" href="/">Profile</a>
        <a className="hover:text-cyan-800" href="/">Logout</a>
      </div>
    </div>
    </div>
  )
}

export default Navbar
