import React, { useEffect, useState } from "react";
import Nav from "../../../Page/Navbar/Navbar";
import axios from "axios";
// import "../../../Page/Login/Login.css";
// import "../todo-list/list.css";
import { Link } from "react-router-dom";

function TodoList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/viewuser")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching todo list:", error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/deleteuser/${id}`);
      const updatedTodos = users.filter((user) => user._id !== id);
      setUsers(updatedTodos);
      console.error("OK:");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      <Nav />
      <div className="mainall">
        <div className="box1">
          <h3>User List</h3>
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
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/update/user/${user._id}`} className="btnx1">
                      Edit
                    </Link>
                    <br />
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btnx1"
                    >
                      Delete
                    </button>
               
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

export default TodoList;
