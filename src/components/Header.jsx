import atyLogo from "../images/aty-logo-dark.png";
import Card from "./Card";
import "./Header.css";
import { useLocation } from "react-router-dom";

export default function Header() {
  let location = useLocation();
  location =
    location.pathname == "/"
      ? "Dashboard"
      : location.pathname.slice(1, location.pathname.length);

  return (
    <header className="header">
      <div className="logo">
        <img src={atyLogo} />
      </div>

      <div className="menu-name">
        <span>{location}</span>
      </div>

      <div className="cards">
        <Card />
      </div>
    </header>
  );
}
