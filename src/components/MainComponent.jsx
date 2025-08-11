import React from 'react'
import { useContext } from 'react'
import { MyStore } from '../context/MyContext'

import { CloudRain, CloudSun } from "lucide-react"; 
const MainComponent = () => {
    const {unit,currentWeather} = useContext(MyStore)
  return (
    <div className="md:col-span-2 bg-white/60 p-6 rounded-xl shadow">
    <p className="text-gray-900">{currentWeather.time}</p>
    <div className="flex items-center gap-4">
      <span className="text-5xl font-bold">
        {unit === "C"
          ? `${currentWeather.temperature.C}°C`
          : `${currentWeather.temperature.F}°F`}
      </span>
      {currentWeather.condition === "Sunny" ? (
        <CloudSun size={48} className="text-yellow-500" />
      ) : (
        <CloudRain size={48} className="text-blue-500" />
      )}
    </div>
    <h1>{currentWeather.city}</h1>
    <p className="text-lg">{currentWeather.condition}</p>
    <p className="text-gray-600 mt-2">{currentWeather.description}</p>

    {/* Details */}
    <div className="grid grid-cols-3 gap-4 mt-4">
      {Object.entries(currentWeather.details).map(([key, val]) => (
        <div
          key={key}
          className="bg-black/75 p-4 rounded-lg shadow-xl text-center"
        >
          <p className="font-semibold capitalize text-white">{key}</p>
          <p className="text-white/50">{val}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default MainComponent
