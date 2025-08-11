# 🎥 YouTube Player UI Clone (React + Vite)

A **frontend-only** YouTube-like UI built using **React**, **Vite**, and **Tailwind CSS**.  
The project replicates the YouTube homepage and video player page **without any backend** or actual video fetching.  
It uses **static JSON data** for video thumbnails, titles, and comments.

---

## 🚀 Features

- **Responsive Design** (Mobile, Tablet, Desktop)
- **Homepage** with video cards from JSON data
- **Video Player Page** with:
  - Embedded video or placeholder thumbnail
  - Video title, views, and channel info
  - Like / Dislike / Share / Download buttons (non-functional)
  - Static description area
  - Static comments section
- **Sidebar Navigation** (collapsible, full-screen on mobile)
- **Search Bar** hidden on mobile view
- **React Router** navigation between pages

---

## 🛠 Tech Stack

- **React** (Vite)
- **Tailwind CSS** (styling)
- **React Router DOM** (navigation)
- **Remix Icons** (icons)
- **JSON Data** (mock videos & comments)

---

## 📂 Folder Structure

```plaintext
src/
├── assets/           # Images, icons, and static assets
├── components/       # Navbar, Sidebar, VideoCard, etc.
├── context/          # React Context for global state
├── data/             # videos.json, comments.json
├── pages/            # HomePage.jsx, PlayerPage.jsx
├── App.jsx
├── main.jsx
└── index.css
