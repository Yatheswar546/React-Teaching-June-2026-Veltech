import { useState } from "react";

export default function Counter( {diff, name} ) {

    console.log(`props: ${diff}, ${name}`);

    const [counter, setCounter] = useState(0);

    function handleCounter() {
        setCounter(counter + diff);
    }

    return (
        <>
            <button onClick={handleCounter}>+</button>
            <h2>{counter}</h2>
        </>
    );


}


