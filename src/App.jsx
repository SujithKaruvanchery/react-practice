// import Profile from "./components/Profile";
// import TodoList from "./components/TodoList";
// import Avatar from "./components/Avatar";
// import Login from "./components/Login";
// import Fruits from "./components/Fruits";
// import Users from "./components/User";
// import Timer from "./components/Timer";
// import Effects from "./components/effects/Effects";

// function App() {
//   return (
//     <>
//       <section>
//         <h1>Amazing scientists</h1>
//         <Profile />
//         <Profile />
//         <Profile />
//       </section>

//       <section>
//         <TodoList />
//       </section>

//       <section>
//         <Avatar />
//       </section>

//       <section>
//         <Login />
//       </section>

//       <section>
//         <Fruits />
//       </section>

//       <section>
//         <Users />
//       </section>

//       <section>
//         <Timer />
//       </section>

//       <section>
//         <Effects />
//       </section>
//     </>
//   );
// }

// export default App;


// import React, { useState } from 'react'
// import Counter from './components/Counter'

// function App() {
//   const [state, setState] = useState(false)
//   return (
//     <div>
//       <h1 onClick={() => setState(!state)}>Show / Hide</h1>
//       {state && <Counter />}
//     </div>
//   )
// }

// export default App

// import { useMemo, useState } from "react";

// function App() {
//   const [number, setNumber] = useState(10);
//   const [count, setCount] = useState(0);

//   const square = useMemo(() => {
//     return number * number;
//   }, [number]);

//   return (
//     <div>
//       <h1>Square: {square}</h1>

//       <button onClick={() => setNumber(number + 1)}>
//         Change Number
//       </button>

//       <button onClick={() => setCount(count + 1)}>
//         Count: {count}
//       </button>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import "./index.css";
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  )
}

export default App;
