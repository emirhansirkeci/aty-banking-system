import "./BorderText.css";

export default function BorderText(props) {
  return (
    <div className="bordertext-main">
      <div className="border-self"></div>
      <div className="border-text">{props.text}</div>
    </div>
  );
}
