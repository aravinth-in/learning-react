import React from 'react';
import { useState } from 'react'; 

export const Text = () => {
    const [text, setText] = useState("");
    return (
        <div>
            <input onChange={(event) => {
                setText(event.target.value)
            }}
            />
        <h2> {text} </h2>
        </div>
    );
}