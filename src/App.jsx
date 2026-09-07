import { useState } from "react";
import Profile from "./components/Profile";
import TodoList from "./components/TodoList";
import Avatar from "./components/Avatar";

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
    </>
  );
}

export default App;
