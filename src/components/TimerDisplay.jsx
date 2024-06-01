import React from "react";

const TimerDisplay = ({ secondsLeft, minutesLeft, hoursLeft, daysLeft }) => {
    return (
        <>
            <div className="timer_display big">
                <div className="time">
                    <span>{daysLeft}</span>
                </div>
                <div className="separator">:</div>
                <div className="time">
                    <span>{hoursLeft}</span>
                </div>
                <div className="separator">:</div>
                <div className="time">
                    <span>{minutesLeft}</span>
                </div>
                <div className="separator">:</div>
                <div className="time">
                    <span>{secondsLeft}</span>
                </div>
            </div>
            <div className="timer_display label">
                <div className="time">
                    <span>days</span>
                </div>
                <div className="separator"></div>
                <div className="time">
                    <span>hours</span>
                </div>
                <div className="separator"></div>
                <div className="time">
                    <span>mins</span>
                </div>
                <div className="separator"></div>
                <div className="time">
                    <span>seconds</span>
                </div>
            </div>
        </>
    );
};

export default TimerDisplay;
