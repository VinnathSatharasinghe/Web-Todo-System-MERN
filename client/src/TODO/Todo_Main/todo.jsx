import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import Nav from "../../Page/Navbar/Navbar";
import "../Todo_Main/todo_.css";

function todo() {
  const location = useLocation();
  const { name } = location.state;
  const { id } = location.state;

  const [body, setBody] = useState();
  const [title, setTitle] = useState();

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
            // dispatch(addTodos(result.data));
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
              <Form.Label>NAME :</Form.Label>

              <input
                type="text"
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
                type="text"
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
          <br />

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
