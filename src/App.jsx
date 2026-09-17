import Profile from "./components/Profile";
import TodoList from "./components/TodoList";
import Avatar from "./components/Avatar";
import Login from "./components/Login";
import Fruits from "./components/Fruits";
import Users from "./components/User";
import Timer from "./components/Timer";
import Effects from "./components/effects/Effects";

function App() {
  return (
    <>
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>

      <section>
        <TodoList />
      </section>

      <section>
        <Avatar />
      </section>

      <section>
        <Login />
      </section>

      <section>
        <Fruits />
      </section>

      <section>
        <Users />
      </section>

      <section>
        <Timer />
      </section>

      <section>
        <Effects />
      </section>
    </>
  );
}

export default App;


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