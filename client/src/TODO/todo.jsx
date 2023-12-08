import Button from "react-bootstrap/Button";
import Link from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { addTodos } from "../TODO/redux-todo/todo_userSlice";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../Navbar/Navbar";
import "./todo_.css";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function todo() {

  const [work, setWork] = useState();
  const dispatch = useDispatch();

  const location = useLocation();
  const name = location.state ? location.state.name : null;

  const [errors, setErrors] = useState({
    work: "",
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

    if (!work) {
      toast.error("Login Failed. Enter Work");
    } else {
      if (Object.values(newErrors).every((error) => error === "")) {
        axios
          .post("http://localhost:3001/todo/work" , { name, work })
          .then((result) => {
            dispatch(addTodos(result.data));
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
              {/* <Form.Label>Username</Form.Label> */}
              <br />
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

            <br />
            <br />

            <Form.Group className="mb-3" controlId="formBasicTodo">
              <br />
              <input
                id="work"
                type="work1"
                placeholder="Enter Work"
                autoComplete="off "
                name="work"
                value={work}
                defaultValue={""}
                onChange={(e) => setWork(e.target.value)}
              />
              <div className="text-danger">{errors.work}</div>
            </Form.Group>
     
            <Button variant="primary" type="submit">
              Add Todo
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
            <a href="/todo_personal">User</a>
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
