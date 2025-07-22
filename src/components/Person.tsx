import { useState } from "react";

interface Props{
    name: string;
    email : string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country: Country;
}

export enum Country {
    Brazil = "Brazil",
    Canada = "Canada",
    India = "India",
}

export const Person = (props: Props) => {
    // const [state, setState] = useState<string>("");

    /*
    const getPrice = (name: string): number => {
        return 10000;
    }
    */
   
    return (
        <div>
            <h1> Name: {props.name} </h1>
            <h1> Email: {props.email} </h1>
            <h1> Age: {props.age} </h1>
            <h1> This thing: {props.isMarried? "is" : "is not"} MARRIED</h1>
            {props.friends.map((friend: string) => (
                <h1> {friend} </h1>
            )) }
            <h1> Country: {props.country} </h1>
        </div>
    );
}