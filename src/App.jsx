import Profile from "./components/Profile";
import TodoList from "./components/TodoList";
import Avatar from "./components/Avatar";
import Login from "./components/Login";
import Fruits from "./components/Fruits";
import Users from "./components/User";
import Timer from "./components/Timer";

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
    </>
  );
}

export default App;
