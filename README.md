# Trip Planner - Full Stack Application

A responsive full-stack travel planner web app built with React (frontend) and Node.js + Express + MongoDB (backend). The app dynamically fetches and displays popular destinations and top-selling tour packages with interactive UI components using MUI and React Query.

---

## Features

- **Frontend:**
  - Built with React and Material-UI (MUI) for UI components.
  - Uses React Query for efficient data fetching and caching.
  - Displays dynamic sections:
    - Hero Section
    - Destinations
    - Advantages
    - Tour Packages (Top Selling)
    - Testimonials
  - Interactive modals for package details.
  - Uses React Icons for visual enhancements.
  - Smooth loading states with spinners.
  - Responsive and modular component structure.

- **Backend:**
  - Built with Node.js, Express, and MongoDB (Mongoose).
  - Provides REST API endpoints to fetch data dynamically.
  - Contains mock data seeded via `seeder.js`.
  - JSON responses for frontend consumption.

---

## API Endpoints

| Method | Route                     | Description                         |
|--------|---------------------------|-------------------------------------|
| GET    | `/api/destinations`       | Returns a list of popular destinations |
| GET    | `/api/packages/top-selling` | Returns a list of top-selling tour packages |

---

## Project Structure

