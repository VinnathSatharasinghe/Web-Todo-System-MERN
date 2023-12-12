import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

import Nav from "../Navbar/Navbar";

// import { addTodos } from "../TODO/redux-todo/todo_userSlice";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

import "./todo_.css";

function todo() {

  const [body, setBody] = useState();
  const [title, setTitle] = useState();

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const name = location.state ? location.state.name : null;

  const [errors, setErrors] = useState({
    title: "",
    body: "",
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

    if (!title) {
      toast.error("No Task!. Enter Tasks");
    } else {
      if (Object.values(newErrors).every((error) => error === "")) {
        axios
          .post("http://localhost:3001/addtask" , { name, title , body })
          .then((result) => {
            // dispatch(addTodos(result.data));
            navigate("/todo_list");
            console.log(result);
            toast.success("Todo Successfully Added!");
          })
          .catch((err) => {
            console.log(err);
            toast.error("Todo failed. Work Already Registerd.");
          });
      }
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <Nav />
      <div className="mainx">
        <div className="sub">
          <Form onSubmit={handleSubmit}>
            <h3>Todo</h3>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>USERNAME :</Form.Label>
         
              <input
                type="text"
                placeholder="Enter Username"
                autoComplete="off"
                name="name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTodo">
            <Form.Label>TITLE :</Form.Label>
              <input
                id="title"
                type="text"
                placeholder="Enter Title"
                autoComplete="off "
                name="title"
                value={title}
                defaultValue={""}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="text-danger">{errors.title}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTodo">
            <Form.Label>BODY :</Form.Label>
              <input
                id="body"
                type="text"
                placeholder="Enter Body"
                autoComplete="off "
                name="body"
                value={body}
                defaultValue={""}
                onChange={(e) => setBody(e.target.value)}
              />
              <div className="text-danger">{errors.body}</div>
            </Form.Group>
     
            <Button variant="primary" type="submit">
              Todo
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

          <Button variant="primary" type="submit">
            <a href="/user">User</a>
          </Button> 
          <br />
           <Button variant="primary" type="submit">
            <a href="/todo_list">List</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default todo;
