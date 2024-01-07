import circle from "../assets/circle.png";
import cross from "../assets/cross.png";
export default function Square(props) {
  const squareStyle = {
    width: "50px",
    height: "50px",
  };
  return (
    <>
      <div className="square"onClick={props.onClick}>
    
        <h5 >
        {props.value === "X" && <img src={cross} style={squareStyle} alt="Cross" />}
          {props.value === "O" && <img src={circle} style={squareStyle} alt="Circle" />}
        </h5>
      </div>
    </>
  );
}