# ATY Banking System UI

This project is a **banking system interface** developed for **GTA 5 servers**. It allows players to manage their bank accounts, transfer money, view bills, and adjust personal settings within the in-game UI.

> ⚠️ **Note:** This UI is **not designed for mobile devices**. Since GTA 5 is only played on desktop, the layout is optimized for desktop use only.

## Technologies Used

- ⚛️ React 18
- ⚡ Vite
- 🌐 React Router DOM v6

## Routing Structure

All page components are located in the `src/pages/` folder.  

The application includes the following main routes:

- `/` – Dashboard
- `/transfer` – Money transfer
- `/bills` – Bills overview
- `/settings` – User settings

Routing is handled using `react-router-dom` with nested components.

## UI Layout

- **Header**: Fixed top section visible on all pages.
- **SideBar**: Sidebar navigation for switching between pages.
- **Content Area**: Main page content rendered here.

Example routing inside `App.jsx`:

```jsx
<Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="transfer" element={<Transfer />} />
  <Route path="bills" element={<Bills />} />
  <Route path="settings" element={<Settings />} />
</Routes>
```

## Getting Started
```sh
git clone https://github.com/emirhansirkeci/aty-banking-system.git
cd aty-banking-system
npm install
npm run dev
```

## Building the Project

To generate an optimized production build:

```sh
npm run build
```

## Developer Notes

- reset.css is used to normalize styles across browsers.
- The UI is clean and easy to customize for your specific server needs.
- All mock data is stored statically under `src/data/`.
- This project only includes the frontend UI. Backend logic and API integration are not included.

