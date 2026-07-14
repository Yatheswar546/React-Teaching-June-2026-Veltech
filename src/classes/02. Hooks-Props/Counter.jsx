import { useState } from "react";

export default function Counter() {

    const [counter, setCounter] = useState(1);

    function handleIncrement() {
        setCounter(counter + 1);
    }

    // function handleDecrement() {
    //     setCounter(counter - 1);
    // }

    return (
        <>
            <h1>Counter App</h1>
            <button onClick={handleIncrement}>+</button>
            {/* <button onClick={handleDecrement}>-</button> */}
            

            {/* Alternate Method - Inline Update */}
            <button onClick={() => setCounter(counter - 1)}>-</button>

            <h2>{counter}</h2>
        </>
    );

}