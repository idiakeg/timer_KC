const TimerInput = ({ userTimerInput, handleSetTimeValue }) => {
    return (
        <div className="timer_input">
            <h1>Duration in seconds</h1>

            <input
                value={userTimerInput}
                type="number"
                onChange={(e) => handleSetTimeValue(e.target.value)}
            />
        </div>
    );
};

export default TimerInput;
