import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { addEmployees } from "./redux/userSlice";
import {useDispatch} from 'react-redux'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from "./Navbar/Navbar";
import "./sing.css";


function singup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch()

  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const notifySuccess = (message) => {
      toast.success(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    };


    let newErrors = { ...errors };

    if (!name) {
      toast.error("Login Failed. Enter Username");

    } else {
      // newErrors.name = "";

      if (!email) {
        toast.error("Email is required");
      } else {
        // newErrors.email = "";

        if (!password) {
          toast.error("Password is required");
        } else {
          
          // newErrors.password = "";

          if (Object.values(newErrors).every((error) => error === "")) {
            axios
              .post("http://localhost:3001/register", { name, email, password })
              .then((result) => {
                dispatch(addEmployees(result.data))
                console.log(result);
                toast.success("Registration Successful!");
              })
              .catch((err) => {
                console.log(err);
                toast.error("Registration failed. User Already Registerd.");
              });
              
          }
      
          setErrors(newErrors);

        }
      }

    }







  };
    // axios
    //   .post("http://localhost:3001/register", { name, email, password })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => console.log(err));


  return (
    <div>
      <Nav/>
      <div className="mainx">
        <div className="sub">
          <Form onSubmit={handleSubmit}>
            <h3>Register</h3>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              {/* <Form.Label>Username</Form.Label> */}
              {/* <label htmlFor="name">Username</label> */}
              <br />
              <input
                id="name"
                type="text1"
                placeholder="Enter Username"
                autoComplete="off "
                name="name"
                value={name}
                defaultValue={""}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="text-danger">{errors.name}</div>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              {/* <label htmlFor="email">Email address</label> */}
              <br />
              <input
                id="email"
                type="email1"
                value={email}
                placeholder="Enter Email"
                name="email"
                defaultValue={""}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="text-danger">{errors.email}</div>
              {/* <Form.Text className="text-muted"></Form.Text> */}
            </Form.Group>

            <br />

            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              {/* <label htmlFor="password">Password</label> */}
              <br />
              <input
                id="password"
                type="password1"
                placeholder="Enter Password"
                name="password"
                value={password}
                defaultValue={""}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-danger">{errors.password}</div>
            </Form.Group>
            <br />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />

          <Button variant="primary" type="login">
            <a href="/home">Login</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default singup;



// if (result.data === "null") {
//   toast.error("Login Failed. No record existed.", { autoClose: 3000 });
//   return;
// } else if (result.data === "success") {
//   toast.success("Login successful!", { autoClose: 3000 });
//   // navigate("./singup.jsx");
// } else if (result.data === "nopass") {
//   toast.error("Login Failed. Incorrect Password");
//   return;
// } else {
//   toast.error("Login Failed. No record existed.");
//   return;
// }

// navigate("./Login.jsx");
