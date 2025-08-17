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
 │    ├── CityCard.jsx   # Shows weather details
 │    ├── MainCompnent.jsx      # Displays other cities (scrollable list)
 │
 ├── App.jsx                # Main app component
 ├── index.css              # TailwindCSS styles
 └── main.jsx               # Entry point
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
