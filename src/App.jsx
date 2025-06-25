import { Route, Routes } from "react-router-dom";
import "./assets/App.css";
import "./assets/reset.css";

import Header from "./components/Header";
import SideBar from "./components/SideBar";

import Dashboard from "./pages/Dashboard";
import Transfer from "./pages/Transfer";
import Bills from "./pages/Bills";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <div className="main">
        <Header />

        <div className="content">
          <SideBar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="transfer" element={<Transfer />} />
            <Route path="bills" element={<Bills />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
