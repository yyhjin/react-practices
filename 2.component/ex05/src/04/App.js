import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default function App() {
    const getCurrentClockTime = () => {
        const now = new Date();
        const hours = now.getHours();

        return {
            hours: ("0" + (hours > 12 ? hours - 12 : hours)).slice(-2),
            minutes: ("0" + now.getMinutes()).slice(-2),
            seconds: ("0" + now.getSeconds()).slice(-2),
            session: hours > 12 ? "pm" : "am",
        };
    };

    const [currentTime, setCurrentTime] = useState(getCurrentClockTime());
    const [ticks, setTicks] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentClockTime());
            setTicks((x) => x + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            {ticks % 10 === 0 ? null : (
                <Clock
                    message={`ex05-Component LifeCycle: ${ticks}`}
                    hours={currentTime.hours}
                    minutes={currentTime.minutes}
                    seconds={currentTime.seconds}
                />
            )}
        </>
    );
}
