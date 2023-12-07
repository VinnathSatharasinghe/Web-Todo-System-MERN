import React from "react";
import "../redux/users.css";
import { Link } from "react-router-dom";
import Navi from "../Navbar/Navbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployees } from "./userSlice";
import { getEmployees } from "./userSlice";
import { useEffect } from "react";



function users() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);
  console.log(useSelector((state) => state.employees.employees));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001");
        dispatch(getEmployees(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteemployee/" + id)
      .then((res) => {
        dispatch(deleteEmployees({ id }));
        console.log(useSelector((state) => state.employees.employees));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navi />
      <div className="navv">
        <header>
          <nav>
            <ul>
              <li>
                <button className="home-btn">
                  <a href="/home">Home</a>
                </button>
              </li>
              <li>
                <button className="home-btn">
                  <a href="/sing">Add New</a>
                </button>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div className="mainall">
        {/* <div>
        <ui className="flex">
          <form action="/home">
            <button className="btn1">Home</button>
          </form>
        </ui>

        <ui className="flex">
          <form action="/sing">
            <button className="btn1">Add New</button>
          </form>
        </ui>
      </div> */}

        <div className="box1">
          <table className="tablex">
            <thead>
              <tr className="test">
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => {
                return (
                  <tr>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.password}</td>
                    <td>
                      <Link to={`/edit/${employee.id}`} className="btnx1">
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(employee.id)}
                        className="btnx1"
                      >
                        Delete
                      </button>
                      <Link to={`/view/${employee.id}`} className="btnx1">View</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default users;
