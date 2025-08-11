// icons
import Header from "../components/Header";
import CityCard from "../components/CityCard";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";
import MainComponent from "../components/MainComponent";
export default function HomePage() {
  const {cities} = useContext(MyStore)


  return (
    <div className="min-h-screen w-screen bg-black/90 p-6 flex justify-center items-center">
      <div className="w-full h-full md:w-[70vw] md:h-auto bg-black  backdrop-blur-md shadow-2xl rounded-2xl p-6">
        {/* Header */}
        <Header/>

        {/* Current Weather */}
        <div className="grid md:grid-cols-3 gap-6">
          <MainComponent/>

          {/* Other Cities */}
          <div className="bg-white/60 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Other Cities</h2>
            <div className="flex flex-col gap-3 max-h-80 overflow-y-auto pr-2">
              {cities?.map((city, idx) => (
                <CityCard city={city} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
