import React from 'react'
import { useContext } from 'react'
import { MyStore } from '../context/MyContext'
const Header = () => {
  const {unit,setUnit} = useContext(MyStore)
  return (
    <div className="flex justify-between items-center mb-6">
    <h1 className="text-xl font-bold text-white">SkyCast</h1>
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Search Location"
        className="lg:px-4 lg:py-2 w-[28vw] px-1 py-1 rounded-lg border border-gray-300 outline-none text-white"
      />
      <button
        onClick={() => setUnit(unit === "C" ? "F" : "C")}
        className="lg:px-4 lg:py-2 px-2 py-1 bg-blue-500 text-white rounded-lg shadow "
      >
        {unit === "C" ? "°C" : "°F"}
      </button>
      <div className="items-center hidden md:flex gap-2">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-semibold hidden md:block text-white">Wow Rakibul</span>
      </div>
    </div>
  </div>
  )
}

export default Header
