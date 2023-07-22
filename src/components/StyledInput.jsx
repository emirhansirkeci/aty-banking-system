import "./StyledInput.css";

export default function Input(props) {
  return (
    <div className="styled-input-wrapper">
      <div>
        <label>{props.text}</label>
      </div>
      <input className="styled-input" />
    </div>
  );
}
