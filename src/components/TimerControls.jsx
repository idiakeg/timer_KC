import React from "react";

const TimerControls = ({ pauseTimer, resetTimer, startTimer }) => {
    return (
        <div className="time_controls">
            <span className="start" onClick={startTimer}>
                <i className="fa-solid fa-play"></i>
            </span>
            <span className="pause" onClick={pauseTimer}>
                <i className="fa-solid fa-pause"></i>
            </span>
            <span className="reset" onClick={resetTimer}>
                <i className="fa-solid fa-rotate-right"></i>
            </span>
        </div>
    );
};

export default TimerControls;
