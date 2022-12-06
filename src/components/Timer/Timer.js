import "./Timer.css";

export default function Timer(props) {

  return (
      <div className="Timer">
          <span className="Timer__digits">
            {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
          </span>
            <span className="Timer__digits">
            {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
          </span>
            <span className="Timer__digits Timer__milli-sec">
            {("0" + ((props.time / 10) % 100)).slice(-2)}
          </span>
      </div>
  );
}