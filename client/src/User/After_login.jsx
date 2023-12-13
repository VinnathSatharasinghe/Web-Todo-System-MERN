// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import axios from 'axios';

function AfterLogin() {
  const location = useLocation();
  const name = location.state ? location.state.name : null;
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Fetch user details based on the username (name)
    axios.get(`http://localhost:3001/viewtask/${name}`)
      .then((result) => {
        setUserData(result.data.list);
      })
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <div className="tests">
      <Navbar />
      <div className="home-page">
        {/* ... Your navigation buttons */}
        <main>
          <section className="hero">
            <h2>Welcome, {name}!</h2>
            <p>Wait.</p>

            {/* Display user information */}
            <p>Username: {name}</p>
            <p>Email: {userData.email}</p>
            <p>Password: {userData.password}</p>
            {/* Display other user information based on the backend response */}
          </section>
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Winny Cafe</p>
        </footer>
      </div>
    </div>
  );
}

export default AfterLogin;




// function After_login() {

//   const [work, setWork] = useState();
//   const location = useLocation();
//   const name = location.state ? location.state.name : null;

//   const [errors, setErrors] = useState({
//     work: "",
//   });

//   return (

//     <div className="tests">
//       <Navbar />
//       <div className="home-page">
//         <header>
//           <nav>
//             <ul>
//               <li>
//                 <button className="home-btn">
//                   <a href="/home">Home</a>
//                 </button>
//               </li>
//               <li>
//                 <button className="home-btn">
//                   <a href="/gg">Login</a>
//                 </button>
//               </li>
//               <li>
//                 <button className="home-btn">
//                   <a href="/sing">SINGUP</a>
//                 </button>
//               </li>
//               <li>
//                 <button className="home-btn">
//                   <a href="/users">View</a>
//                 </button>
//               </li>
//               <li>
//                 <button className="home-btn">
//                   <a href="#contact">CONTENT</a>
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </header>
//         <main>
//           <section className="hero">
//             <h2>Welcome , {name}!</h2>
//             <p>wait.</p>
//             <Form.Group className="mb-3" controlId="formBasicUsername">
//               {/* <Form.Label>Username</Form.Label> */}
//               <br />
//               <input
//                 type="text"
//                 placeholder="Enter Username"
//                 autoComplete="off"
//                 name="name"
//                 defaultValue={name}
//                 onChange={(e) => setName(e.target.value)}
//                 disabled
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicUsername">
//               {/* <Form.Label>Username</Form.Label> */}
//               <br />
//               <input
//                 type="text"
//                 placeholder="Enter Username"
//                 autoComplete="off"
//                 name="name"
//                 defaultValue={name}
//                 onChange={(e) => setName(e.target.value)}
//                 disabled
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicUsername">
//               {/* <Form.Label>Username</Form.Label> */}
//               <br />
//               <input
//                 type="text"
//                 placeholder="Enter Username"
//                 autoComplete="off"
//                 name="name"
//                 defaultValue={name}
//                 onChange={(e) => setName(e.target.value)}
//                 disabled
//               />
//             </Form.Group>
       


//           </section>
//         </main>
//         <footer>
//           <p>&copy; {new Date().getFullYear()} Winny Cafe</p>
//         </footer>
//       </div>
//     </div>
//   );
// }


// export default After_login;