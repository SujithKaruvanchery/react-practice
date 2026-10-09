import React, { useEffect, useRef, useState } from 'react'

function MyComponent() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component Rerendered");
    })


    function handleClick1() {
        inputRef1.current.focus();
        console.log(inputRef1.current.focus(), "=====inputRef1.current.focus()");
        inputRef1.current.style.backgroundColor = "red";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2() {
        inputRef2.current.focus();
        console.log(inputRef2.current.focus(), "=====inputRef2.current.focus()");
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3() {
        inputRef3.current.focus();
        console.log(inputRef3.current.focus(), "=====inputRef3.current.focus()");
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "green";
    }

    return (<>
        <div>
            <input ref={inputRef1} />
            <button onClick={handleClick1}>
                Click Me 1
            </button>
        </div>
        <div>
            <input ref={inputRef2} />
            <button onClick={handleClick2}>
                Click Me 2
            </button>
        </div>
        <div>
            <input ref={inputRef3} />
            <button onClick={handleClick3}>
                Click Me 3
            </button>
        </div>
    </>
    )
}

export default MyComponent