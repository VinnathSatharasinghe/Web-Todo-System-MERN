import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./todo_view.css";

import Nav from "../../Navbar/Navbar";

function todo_view() {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos.todos);
  const todo = todos.find((u) => u.id === id);
  console.log(todo);

  const [work, setWork] = useState(todo.work);


  const handleView = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:3001/view/" + id, {
        work,
      })

  };

  return (
    <div>
      <Nav />
      <div>
        <div className="mainup">
          <div className="subup">
            <Form onSubmit={handleView}>
              <h3>Details</h3>

              <Form.Group className="uname" controlId="formBasicUsername">
                <button className="qq" type="viewx">
                  WORKS
                </button>
                <br />
                <br />
                <input
                  id="work"
                  value={work}
                  type="text1"
                  name="work"
                  disabled
                  onChange={(e) => setWork(e.target.value)}
                />
              </Form.Group>
              <br />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default todo_view;
