// Import necessary dependencies
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditUser() {

  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/viewuser/${id}`)
      .then((response) => {
        const user = response.data.user[0]; // Assuming there's only one task
        setName(user.name)
        setEmail(user.email)
      })
      .catch((error) => {
        console.error("Error fetching task details:", error);
      });
  }, []);


  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    try {
      await axios.put(`http://localhost:3001/update/user/${id}`, {
        name: name,
        email: email,
      });
      toast.success("Update successful!", { autoClose: 5000 });
      console.log("Task updated successfully!");
      // You can redirect the user or perform any other necessary actions here
    } catch (error) {
      toast.error("Update UNsuccessful!", { autoClose: 5000 });
      console.error("Error updating task:", error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleUpdate}>
        <h2>Edit User</h2>
        <label>ID:</label>
        <input
          type="text"
          value={id}

        />
        <br />
        <label>Name :</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default EditUser;