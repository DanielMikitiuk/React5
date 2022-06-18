
import React, { useState, useEffect } from 'react';

function CurrentTime(){
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    },[]);
    return (
        <div className="app">
                <h1>{currentTime.toLocaleTimeString()}</h1>
        </div>
    );
}

export default CurrentTime;

