import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "react-bootstrap/Form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import Nav from "../../Page/Navbar/Navbar";
import "../Todo_Main/todo_.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function todo() {
  const location = useLocation();
  const { name } = location.state;
  const { id } = location.state;

  const [body, setBody] = useState();
  const [title, setTitle] = useState();
  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    title: "",
    body: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { ...errors };

    if (!title) {
      toast.error("No Task!. Enter Tasks");
    } else {
      if (Object.values(newErrors).every((error) => error === "")) {
        axios
          .post("http://localhost:3001/addtask", { name, title, body })
          .then((result) => {
            navigate("/todo_personal", {
              state: {
                title: result.data.name,
                body: result.data.email,
                id: result.data.id,
              },
            });
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

  useEffect(() => {
    // Fetch todo list data including user information
    axios
      .get("http://localhost:3001/viewuser")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching todo list:", error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/deletetask/${id}`);
      // Refresh the todo list after deletion
      const updatedTodos = todos.filter((todo) => todo._id !== id);
      setTodos(updatedTodos);
      console.error("OK:");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      <Nav />
      <div className="mainy">
        <div className="sub">
          <Form onSubmit={handleSubmit}>
            <h4 type="todo">Todo</h4>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>NAME :</Form.Label>

              <input
                type="work1"
                placeholder=""
                autoComplete="off"
                name="name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label> Id_user :</Form.Label>

              <input
                type="work1"
                placeholder=""
                autoComplete="off"
                name="name"
                defaultValue={id}
                onChange={(e) => setName(e.target.value)}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTodo">
              <Form.Label>TITLE :</Form.Label>
              <input
                id="title"
                type="work1"
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
                type="work1"
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
          <Button variant="primary" type="submit">
            <a href="/todo_list">List</a>
          </Button>
        </div>
      </div>
      <br />
      <br />

      <div className="mainall">
        <div className="box1">
          <h2>Todo List</h2>
          <br />
          <table className="tablex">
            <thead>
              <tr className="test">
                <th>User Name</th>
                <th>User Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo._id}>
                  {/* <td>{todo.user11}</td> */}
                  <td>{todo.name}</td>
                  <td>{todo.email}</td>
                  <td>
                    <Link to={`/edit/${todo.id}`} className="btnx1">
                      Edit
                    </Link>
                    <br />
                    <button
                      onClick={() => handleDelete(todo._id)}
                      className="btnx1"
                    >
                      Delete
                    </button>
                    <br />
                    <Link to={`/view/${todo.id}`} className="btnx1">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default todo;
