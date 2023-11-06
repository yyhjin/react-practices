import React, { Component } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = this._getCurrentTime();
    }

    _getCurrentTime() {
        const now = new Date();
        const hours = now.getHours();
        return {
            hours: ("0" + (hours > 12 ? hours - 12 : hours)).slice(-2),
            minutes: ("0" + now.getMinutes()).slice(-2),
            seconds: ("0" + now.getSeconds()).slice(-2),
            session: hours > 12 ? "pm" : "am",
            ticks: this.state ? this.state.ticks + 1 : 0,
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(
            function () {
                this.setState(this._getCurrentTime());
            }.bind(this),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="clock-display">
                <h2>ex05-Component LifeCycle: {this.state.ticks}</h2>
                {this.state.ticks % 10 === 0 ? null : (
                    <Clock
                        hours={this.state.hours}
                        minutes={this.state.minutes}
                        seconds={this.state.seconds}
                        session={this.state.session}
                    />
                )}
            </div>
        );
    }
}
