"use client"

import * as React from 'react';
import {useState} from "react";

type Props = {

};

export const ExampleCounter = (props: Props) => {
    const [counter, setCounter] = useState<number>(0);

    const incrementCounter = () => setCounter((prev) => prev - 1);
    const decrementCounter= () => setCounter((prev) => prev + 1);
    return (
       <div>
           <button onClick={decrementCounter}>-</button>
           {counter}
           <button onClick={incrementCounter}>+</button>
      </div>

    );
};