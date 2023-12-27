import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditTask() {
  
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Fetch the task data based on the ID
  useEffect(() => {
    axios
      .get(`http://localhost:3001/viewtask/${id}`)
      .then((response) => {
        const list = response.data.list[0]; // Assuming there's only one task
        setTitle(list.title);
        setBody(list.body);
      })
      .catch((error) => {
        console.error("Error fetching task details:", error);
      });
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    try {
      await axios.put(`http://localhost:3001/update_task/${id}`, {
        title: title,
        body: body,
      });
      toast.success("Update successful!", { autoClose: 5000 });
      console.log("Task updated successfully!");
    } catch (error) {
      toast.error("Update unsuccessful!", { autoClose: 5000 });
    }
  };

  return (
    <div>
      <Form onSubmit={handleEdit}>
        <h2>Edit Task</h2>
        <label>ID:</label>
        <input
          type="text"
          value={id}

        />
        <br />
        <label>Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Body:</label>
        <input
          id="body"
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <br />
        <Button type="submit">Save Changes</Button>
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
    </div>
  );
}

export default EditTask;