import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime({
        hours: now.getHours() * 30 + now.getMinutes() / 2, // convert to degrees
        minutes: now.getMinutes() * 6,
        seconds: now.getSeconds() * 6,
      });
    };

    updateClock(); // run immediately
    const interval = setInterval(updateClock, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="clock">
      <div className="numbers">
        <span style={{ "--i": 0 }}><b>12</b></span>
        <span style={{ "--i": 1 }}><b>3</b></span>
        <span style={{ "--i": 2 }}><b>6</b></span>
        <span style={{ "--i": 3 }}><b>9</b></span>

        {/* clock hands */}
        <div className="circle" id="hr" style={{ transform: `rotateZ(${time.hours}deg)` }}>
          <i></i>
        </div>
        <div className="circle" id="mn" style={{ transform: `rotateZ(${time.minutes}deg)` }}>
          <i></i>
        </div>
        <div className="circle" id="sc" style={{ transform: `rotateZ(${time.seconds}deg)` }}>
          <i></i>
        </div>
      </div>
    </div>
  );
};

export default Clock;
