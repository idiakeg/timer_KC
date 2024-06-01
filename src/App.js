import useCountDown from "./useCountDown";
import TimerInput from "./components/TimerInput.jsx";
import TimerDisplay from "./components/TimerDisplay.jsx";
import TimerControls from "./components/TimerControls.jsx";
import { useEffect, useState, useRef } from "react";
import useTest from "./useTest.jsx";

function App() {
    const [userTimerInput, setUserTimeInput] = useState("");
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [stop, setStop] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const intervalRef = useRef(null);

    const handleSetTimeValue = (amount) => {
        setUserTimeInput(+amount);
    };

    const dodo = () => {
        if (!isPaused) {
            setTimeLeft(+userTimerInput);
        } else {
            setTimeLeft(timeLeft);
        }

        if (!stop && !isPaused) {
            startTimer();
        }

        setUserTimeInput("");
    };

    function handleInterval() {
        setTimeLeft((prevTimeLeft) => {
            const updatedTimeLeft = prevTimeLeft - 1;
            if (updatedTimeLeft <= 0) {
                clearInterval(intervalRef.current);
                setStop(true);
            }
            setSeconds(Math.floor(updatedTimeLeft % 60));
            setMinutes(Math.floor((updatedTimeLeft % (60 * 60)) / 60));
            setHours(
                Math.floor((updatedTimeLeft % (24 * 60 * 60)) / (60 * 60))
            );
            setDays(Math.floor(updatedTimeLeft / (24 * 60 * 60)));
            return updatedTimeLeft;
        });
    }

    function startTimer() {
        console.log("start timer.");
        intervalRef.current = setInterval(() => {
            handleInterval();
        }, 1000);
    }

    // function stopTimer() {
    //     clearInterval(intervalRef.current);
    //     setStop(true);
    // }

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setStop(false);
        setTimeLeft(0);
        // setUserTimerInput("");
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    };

    const pauseTimer = () => {
        clearInterval(intervalRef.current);
        setIsPaused(true);
    };

    return (
        <div className="wrapper">
            <TimerInput
                handleSetTimeValue={handleSetTimeValue}
                userTimerInput={userTimerInput}
            />
            <TimerDisplay
                secondsLeft={seconds}
                minutesLeft={minutes}
                hoursLeft={hours}
                daysLeft={days}
            />
            <TimerControls
                pauseTimer={pauseTimer}
                resetTimer={resetTimer}
                startTimer={dodo}
            />
        </div>
    );
}

export default App;
