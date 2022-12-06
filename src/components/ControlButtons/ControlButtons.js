import "./ControlButtons.css";

export default function ControlButtons(props) {

    const StartButton = (
        <div className="ControlButtons__btn-start" onClick={props.handleStart}>
            <div/>
        </div>
    );

    const ActiveButtons = (
        <div className="ControlButtons__btn-grp">
            <div className="ControlButtons__btn ControlButtons__btn-two"
                 onClick={props.handleReset}>
                Reset
            </div>
            <div className="ControlButtons__btn ControlButtons__btn-one"
                 onClick={props.handlePauseResume}>
                {props.isPaused ? "Resume" : "Pause"}
            </div>
        </div>
    );

    return (
        <div className="ControlButtons">
            <div>{props.active ? ActiveButtons : StartButton}</div>
        </div>
    );
}