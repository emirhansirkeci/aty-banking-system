import "./Box.css";

export default function Box(props) {
  const { text, width, height } = props;

  return (
    <div className="box" style={{ width: width, height: height }}>
      <div className="box-text">{text}</div>
      {props.children}
    </div>
  );
}
