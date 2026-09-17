// function Login() {
//     const isLoggedIn = false;

import { useRef, useState } from "react";

//     if (isLoggedIn) {
//         return <h1>Welcome back!</h1>;
//     }
//     return <h1>Please log in.</h1>;
// }

// export default Login;

// function Login() {
//     const isLoggedIn = false;
//     return (
//         <div>
//             {isLoggedIn ? (
//                 <h1>Welcome back!</h1>
//             ) : (
//                 <h1>Please log in.</h1>
//             )}
//         </div>
//     );
// }

// export default Login;

// function Login() {
//     const isAdmin = false;

//     return (
//         <div>
//             <h1>Dashboard</h1>

//             {isAdmin && <button>Delete User</button>}
//         </div>
//     );
// }

// export default Login;

// function Login() {
//     const age = 17;

//     return (
//         <div>
//             {age < 13 ? (
//                 <p>Child</p>
//             ) : age < 18 ? (
//                 <p>Teenager</p>
//             ) : (
//                 <p>Adult</p>
//             )}
//         </div>
//     );
// }

// export default Login;

// function Login() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     return (
//         <div>
//             {isLoggedIn ? (
//                 <>
//                     <h1>Welcome!</h1>
//                     <button onClick={() => setIsLoggedIn(false)}>
//                         Logout
//                     </button>
//                 </>
//             ) : (
//                 <>
//                     <h1>Please Login</h1>
//                     <button onClick={() => setIsLoggedIn(true)}>
//                         Login
//                     </button>
//                 </>
//             )}
//         </div>
//     );
// }

// export default Login;

// import { useRef } from "react";

// function Login() {
//   const usernameRef = useRef(null);

//   const handleFocus = () => {
//     usernameRef.current.focus();
//   };

//   return (
//     <div>
//       <input
//         ref={usernameRef}
//         type="text"
//         placeholder="Enter username"
//       />

//       <button onClick={handleFocus}>
//         Focus Username
//       </button>
//     </div>
//   );
// }

// export default Login;

import React from 'react'

function Login() {
  const emailRef = useRef(null)

  function focusEmail() {
    emailRef.current.focus();
  }
  return (
    <div>
      <input ref={emailRef} />
      <button onClick={focusEmail}>Focus Email</button>
    </div>
  )
}

export default Login

