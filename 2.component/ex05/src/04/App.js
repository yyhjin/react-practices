import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default function App() {
    const [ticks, setTicks] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            /* 시간 */

            setTicks(ticks + 1);

            const date = new Date();
            setHours(date.getHours());
            setMinutes(date.getMinutes());
            setSeconds(date.getSeconds());
        }, 1000);
        return () => clearInterval(timer);
    }, [ticks]);

    return (
        <>
            <Clock
                message={`ex04: ticks ${ticks}`}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        </>
    );
}
