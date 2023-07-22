import BorderText from "./BorderText";
import "./SideBar.css";
import { NavLink } from "react-router-dom";

// Icons
import dashboard from "../images/dashboard-icon.svg";
import transfer from "../images/transfer-icon.svg";
import bills from "../images/bills-icon.svg";
import settings from "../images/settings-icon.svg";
import exit from "../images/exit-icon.svg";

export default function SideBar() {
  return (
    <aside className="sidebar">
      <div className="info">
        <BorderText text="information" />
        <div>
          <div className="info-name">Gustavo Lewis</div>
          <div className="info-money">$12.598</div>
        </div>
      </div>

      <div className="navigate">
        <BorderText text="navigate" />

        <div className="navigate-paths">
          <NavLink to="/">
            <div className="path">
              <img src={dashboard} />
              <div>DASHBOARD</div>
            </div>
          </NavLink>

          <NavLink to="/transfer">
            <div className="path">
              <img src={transfer} />
              <div>TRANSFER</div>
            </div>
          </NavLink>

          <NavLink to="/bills">
            <div className="path">
              <img src={bills} />
              BILLS
            </div>
          </NavLink>

          <NavLink to="/settings">
            <div className="path">
              <img src={settings} />
              SETTINGS
            </div>
          </NavLink>
        </div>
      </div>

      <div className="exit">
        <BorderText text="exit" />

        <div className="exit-text">
          <img src={exit} />
          EXIT
        </div>
      </div>
    </aside>
  );
}
