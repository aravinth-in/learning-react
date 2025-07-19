import React from 'react';
import { useState, useEffect } from 'react';

export const Text = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log("COMPONENT MOUNTING");

        return() => {
            console.log("COMPONENT UNMOUNTING");
        }
    }, []); // If we pass empty array to the useEffect, mounting won't happen other than initial mounting

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