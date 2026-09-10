// import { useRef, useState } from "react";

import { useEffect, useState } from "react";

// function Timer() {
//   const timerRef = useRef(null);
//   const [seconds, setSeconds] = useState(0);

//   const startTimer = () => {
//     if (timerRef.current) return;

//     timerRef.current = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);
//   };

//   const stopTimer = () => {
//     clearInterval(timerRef.current);
//     timerRef.current = null;
//   };

//   return (
//     <div>
//       <h2>{seconds} seconds</h2>

//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </div>
//   );
// }

// export default Timer;


function Timer() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Count is", count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Add
      </button>
    </div>
  )
}

export default Timer;