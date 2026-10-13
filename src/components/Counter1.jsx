// import React, { useState } from 'react'

// function Counter1() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <h2>Count: {count}</h2>

//             <button onClick={() => setCount(count + 1)}>
//                 Increment
//             </button>

//             <button onClick={() => setCount(count - 1)}>
//                 Decrement
//             </button>
//         </div>
//     )
// }

// export default Counter1

import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;

        case 'reset':
            return 0;

        default:
            return state;
    }
}

function Counter1() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={() => dispatch({ type: 'increment' })}>
                Increment
            </button>

            <button onClick={() => dispatch({ type: 'decrement' })}>
                Decrement
            </button>

            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
        </div>
    )
}

export default Counter1