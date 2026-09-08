// import { useEffect, useState } from "react";

// function Users() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <div>
//       {users.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// }

// export default Users;

// import { useState, useEffect } from "react";

// function Users() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Count changed");
//   }, [count]);

//   return (
//     <>
//       <h1>{count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </>
//   );
// }

// export default Users;

import { useState, useEffect } from "react";

function User() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setOnline(true);
    }

    function handleOffline() {
      setOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <h1>
      {online ? "You are Online 🟢" : "You are Offline 🔴"}
    </h1>
  );
}

export default User;

