import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployees } from "./userSlice";
import "./update.css";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "../Navbar/Navbar";

const notify = () => {
  toast.success("🦄 Wow so easy!", {
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

function update() {
  const { id } = useParams();
  const employees = useSelector((state) => state.employees.employees);
  const employee = employees.find((u) => u.id === id);
  console.log(employee);

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [password, setPassword] = useState(employee.password);

  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleUpdate = (e) => {
    e.preventDefault();

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
              .put("http://localhost:3001/update/" + id, {
                name,
                email,
                password,
              })
              .then((result) => {
                dispatch(updateEmployees({ id, name, email, password }));
                console.log(result);
                toast.success("Update Successful!");
              })
              .catch((err) => {
                console.log(err);
                toast.error("Update failed. User Already Updated.");
              });
          }

          setErrors(newErrors);
        }
      }
    }
  };

  return (
    <div>
      <div>
        <Nav />
        <div className="mainup">
          <div className="subup">
            <Form onSubmit={handleUpdate}>
              <h3>Update</h3>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <br />
                <input
                  id="name"
                  value={name}
                  type="text1"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="text-danger">{errors.name}</div>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <br />
                <input
                  id="email"
                  value={email}
                  type="email1"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="text-danger">{errors.email}</div>
              </Form.Group>

              <br />

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <br />
                <input
                  id="password"
                  value={password}
                  type="password1"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="text-danger">{errors.password}</div>
              </Form.Group>
              <br />

              <Button variant="primary" type="submit">
                Update
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
            <Form action="/home">
              <Button variant="primary" type="submit">
                Home
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default update;
