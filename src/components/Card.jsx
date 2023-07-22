import cardChip from "../images/card-chip.svg";
import "./Card.css";

export default function Card(props) {
  return (
    <span className={"card " + props?.className}>
      <div className="bank-name">
        <span>ATY BANK</span>
      </div>

      <div className="card-chip">
        <img src={cardChip} width="16px" />
      </div>

      <div className="card-info">
        <div className="top">
          <span className="card-owner">Gustavo Lewis</span>
          <span className="card-expiration">03/26</span>
        </div>

        <div>
          <div></div>
        </div>

        <div className="bottom">
          <span className="card-number">**** **** **23 4567</span>
          <div className="card-logo">
            <div className="card-gray"></div>
            <div className="card-white"></div>
          </div>
        </div>
      </div>
    </span>
  );
}
