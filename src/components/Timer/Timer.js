import "./Timer.css";

export default function Timer(props) {

    const format = (sub, modulo) => {
        return (props.time / sub) % modulo
    }

    return (
        <div className="Timer">
          <span className="Timer__digits">
            {("0" + Math.floor(format(60000, 60))).slice(-2)}:
          </span>
            <span className="Timer__digits">
            {("0" + Math.floor(format(1000, 60))).slice(-2)}.
          </span>
            <span className="Timer__digits Timer__milli-sec">
            {("0" + (format(10, 100))).slice(-2)}
          </span>
        </div>
    );
}