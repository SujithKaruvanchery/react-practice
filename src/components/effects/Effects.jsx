import React, { useState } from 'react'

function Effects() {
    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(0);

    return (
        <div>
            <div>
                <h1>{counter}</h1>
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
            <div>
                <h1>{counter1}</h1>
                <button onClick={() => setCounter1(counter1 - 1)}>-</button>
            </div>
        </div>
    )
}

export default Effects