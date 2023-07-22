// NEED-TO-FIXED: Text Shadow özelliği biraz daha kurcalanmalı.

export default function MoneyText(props) {
  const { color, symbols, amount, fontSize } = props;

  return (
    <div
      className="tx-amount"
      style={
        props.color == "red"
          ? {
              color: "#A04444",
              textShadow: "-2px 0px 10px rgb(160, 68, 68, 0.5)",
            }
          : {
              color: "#44A05E",
              textShadow: "-2px 0px 10px rgba(68, 160, 94, 0.5)",
            }
      }
    >
      <span style={{ fontSize: fontSize ? fontSize : "1rem" }}>
        {symbols == true ? (color == "red" ? "-" : "+") : ""}
        {amount}$
      </span>
    </div>
  );
}
