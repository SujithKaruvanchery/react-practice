import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    useEffect(() => {
        console.log("Mounting...");
        console.log("Updating..." + count)
        return (() => {
            console.log("Clean up" + count);

        })
    }, [count])
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1>Hello, I am Counter : {count}</h1>
            <button onClick={() => setCount2(count2 + 1)}>Increment</button>
            <h1>Hello, I am Counter : {count2}</h1>
        </div>
    )
}

export default Counter