import React from 'react'
import { useContext } from 'react'
import { MyStore } from '../context/MyContext'
const CityCard = ({city}) => {
    const {unit} = useContext(MyStore)
  return (
    <div
    onClick={() => setCurrentWeather(city)}
    className="flex justify-between items-center bg-black/75 p-3 rounded-lg shadow text-white/80 hover:bg-blue-100 hover:text-black transition"
  >
    <div className="flex flex-col text-left">
      <p className="font-semibold">{city.city}</p>
      <p className="text-sm">{city.condition}</p>
    </div>
    <div>
      <p className="font-semibold">
        {unit === "C"
          ? `${city.temperature.C}°C`
          : `${city.temperature.F}°F`}
      </p>
    </div>
  </div>
  )
}

export default CityCard
