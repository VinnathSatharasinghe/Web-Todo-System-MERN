import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployees } from "./userSlice";
import "../redux/view.css";

import Nav from "../Navbar/Navbar";

function view() {
  const { id } = useParams();
  const employees = useSelector((state) => state.employees.employees);
  const employee = employees.find((u) => u.id === id);
  console.log(employee);

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [password, setPassword] = useState(employee.password);

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:3001/view/" + id, {
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
  };

  return (
    <div>
      <Nav />
      <div>
        <div className="mainup">
          <div className="subup">
            <Form onSubmit={handleUpdate}>
              <h3>Details</h3>

              <Form.Group className="uname" controlId="formBasicUsername">
                <button className="qq" type="viewx">Username</button>
                <br />
                <br />
                <input
                  id="name"
                  value={name}
                  type="text1"
                  name="name"
                  disabled
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <br />

              <Form.Group className="mb-3" controlId="formBasicEmail">
              <button className="qq" type="viewx">Email</button>
                <br />
                <br />
                <input
                  id="email"
                  value={email}
                  type="email1"
                  name="email"
                  disabled
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <br />

              <Form.Group className="mb-3" controlId="formBasicPassword">
              <button className="qq" type="viewx">Password</button>
                <br />
                <br />
                <input
                  id="password"
                  value={password}
                  type="password1"
                  name="password"
                  disabled
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <br />
            </Form>

            <Form action="/home">
              <Button variant="primary">
                Home
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default view;
