import React from "react";

function Clock02(props) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return (
        <div>
            {("0" + (hours > 12 ? hours - 12 : hours)).slice(-2)}
            {":"}
            {("0" + minutes).slice(-2)}
            {":"}
            {("0" + seconds).slice(-2)} {hours > 12 ? "PM" : "AM"}
        </div>
    );
}

export default Clock02;
