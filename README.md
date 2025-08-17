# 🌤 Weather App UI

A simple and clean **Weather App UI** built with **React + TailwindCSS**.
It displays weather information for a selected city along with other available cities.

## 🚀 Features

* Display current weather details for a selected city
* Switch temperature units between **Celsius (°C)** and **Fahrenheit (°F)**
* List of other cities with weather info
* Scrollable city list if there are too many cities
* Responsive and modern UI with TailwindCSS

## 🛠️ Tech Stack

* **React** – Component-based UI
* **TailwindCSS** – Styling and responsive design

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── WeatherCard.jsx   # Shows weather details
 │    ├── CityList.jsx      # Displays other cities (scrollable list)
 │
 ├── App.jsx                # Main app component
 ├── index.css              # TailwindCSS styles
 └── main.jsx               # Entry point
```

## 🔑 Key Code Snippets

### 1. Displaying Weather Details

```jsx
{Object.entries(currentWeather.details).map(([key, val]) => (
  <div key={key} className="bg-white/70 p-4 rounded-lg shadow text-center">
    <p className="font-semibold capitalize">{key}</p>
    <p className="text-gray-700">{val}</p>
  </div>
))}
```

👉 Loops through all weather details (like humidity, wind speed, etc.) and displays them dynamically.

### 2. Other Cities List

```jsx
<div className="flex flex-col gap-3 max-h-60 overflow-y-auto">
  {cities.map((city, idx) => (
    <button
      key={idx}
      onClick={() => setCurrentWeather(city)}
      className="flex justify-between items-center bg-white/70 p-3 rounded-lg shadow hover:bg-blue-100 transition"
    >
      <div className="flex flex-col text-left">
        <p className="font-semibold">{city.city}</p>
        <p className="text-sm text-gray-500">{city.condition}</p>
      </div>
      <div>
        <p className="font-semibold">
          {unit === "C" ? `${city.temperature.C}°C` : `${city.temperature.F}°F`}
        </p>
      </div>
    </button>
  ))}
</div>
```

👉 Lists all available cities and lets you select one to view its weather.
👉 The list is scrollable if items exceed available height.

## 📦 Installation & Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/weather-app-ui.git
   cd weather-app-ui
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📸 Screenshots

*(Add screenshots here after running the app)*

## 🌟 Future Improvements

* Integrate real weather API (like OpenWeatherMap)
* Add search functionality for cities
* Dark mode support

---
