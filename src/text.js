import React, { useState, useEffect } from 'react';
function Text(){
    const [currentText, setCurrentText] = useState('');
    const onChangeFunction = (e) =>{
        e.preventDefault();
        setCurrentText(e.target.value);
    }
    return (
        <div className="app">
                <input type="text" value={currentText} onChange={onChangeFunction} /> <br/>
                <input type="text" value={currentText} onChange={onChangeFunction} />
        </div>
    );
}

export default Text;