import { useState } from "react";
import Counter from "./Counter";

export default function ToggleCounter() {

    const [showCounter, setShowCounter] = useState(false);

    console.log(showCounter)

    function handleCounter() {

        // 1st Method (if-else)
        // if(showCounter) {
        //     setShowCounter(false);
        // }
        // else {
        //     setShowCounter(true);
        // }

        // 2nd Method (ternary)
        // showCounter ? setShowCounter(false) : setShowCounter(true)

        // 3rd Method (best practice)
        setShowCounter(!showCounter);

    }

    return(

        <>
            <button onClick={handleCounter}>
                {showCounter ? "Hide Counter" : "Show Counter"}
            </button>

            {showCounter && <Counter />}

            {/* Alternate Method */}
            {/* {showCounter ? <Counter /> : ""}  */}
        
        </> 

    ); 


}