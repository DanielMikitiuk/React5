import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(1);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(1);
    setIsActive(false);
  }

  const onChangeFunction = (e) => {
    e.preventDefault();
    setSeconds(e.target.value);
    }
    
  useEffect(() => {
    let interval = null;
    if(seconds <= 0){
        setIsActive(false);
    }

    if (isActive ) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">
        <input type="number" value={seconds} onChange={onChangeFunction} />
      </div>
      <div className="row">
        <button onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;