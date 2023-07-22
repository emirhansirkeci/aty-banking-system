import "./Button.css";

export default function Button({ onClick, text }) {
  return (
    <div className="button-wrapper" onClick={onClick}>
      <button className="styled-button">{text}</button>
    </div>
  );
}
