import { useState } from "react";

function CounterBy1() {

    const [counter1, setCounter1] = useState(0);

    function handleCounter1() {
        setCounter1(counter1 + 1);
    }

    return (

        <>
            <h1>Counter By 1</h1>
            <button onClick={handleCounter1}>+</button>
            <h2>{counter1}</h2>
        </>

    );
}


function CounterBy3() {

    const [counter3, setCounter3] = useState(0);

    function handleCounter3() {
        setCounter3(counter3 + 3);
    }

    return (

        <>
            <h1>Counter By 3</h1>
            <button onClick={handleCounter3}>+</button>
            <h2>{counter3}</h2>
        </>

    );
}

function CounterBy5() {

    const [counter5, setCounter5] = useState(0);

    function handleCounter5() {
        setCounter5(counter5 + 5);
    }

    return (

        <>
            <h1>Counter By 5</h1>
            <button onClick={handleCounter5}>+</button>
            <h2>{counter5}</h2>
        </>


    );
}


export {CounterBy1, CounterBy3, CounterBy5};


