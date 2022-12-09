import "./ControlButtons.css";
import classNames from "classnames";

export default function ControlButtons(props) {

    const StartButton = (
        <>
            <div className="ControlButtons__btn ControlButtons__btn-start-reset" onClick={props.handleStart}>
                <div/>
            </div>
            <div className="ControlButtons__btn ControlButtons__btn-pause-resume">
                <div/>
            </div>
        </>
    );

    const ActiveButtons = (
        <>
            <div className="ControlButtons__btn ControlButtons__btn-start-reset active" onClick={props.handleReset}>
                <div/>
            </div>
            <div className={classNames("ControlButtons__btn ControlButtons__btn-pause-resume active", {resume: props.isPaused})} onClick={props.handlePauseResume}>
                <div/>
            </div>
        </>
    );

    return (
        <div className="ControlButtons">
            <div>{props.active ? ActiveButtons : StartButton}</div>
        </div>
    );
}