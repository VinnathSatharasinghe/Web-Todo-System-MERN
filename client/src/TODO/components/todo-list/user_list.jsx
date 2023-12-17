import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../Page/Login/Login.css";
import Nav from "../../../Page/Navbar/Navbar";
import { useLocation } from "react-router-dom";

function SodoList() {
  const [sodos, setSodos] = useState([]);

  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/viewtask/${id}`
        );
        setSodos(response.data.list);
        console.log("Todo list fetched:", response.data);
      } catch (error) {
        console.error("Error fetching todo list:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Nav />
      <div className="mainall">
        <div className="box1">
          <h2>Todo List</h2>

          <br />
          <table className="tablex">
            <thead>
              <tr className="test">
                <th>User</th>
                <td></td>
                <td>-------</td>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {sodos.map((sodo) => (
                <tr key={sodo._id}>
                  <td>{sodo.title}</td>
                  <td></td>
                  <td></td>
                  <td>{sodo.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SodoList;