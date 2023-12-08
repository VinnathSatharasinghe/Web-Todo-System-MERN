import React from "react";
// import "../redux/users.css";
import { Link } from "react-router-dom";
import Navi from "../../Navbar/Navbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodos, getTodos } from "../redux-todo/todo_userSlice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function todo_personal() {

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  console.log(useSelector((state) => state.todos.todos));

  const location = useLocation();
  const name = location.state ? location.state.name : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/todo/find");
        dispatch(getTodos(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [dispatch, name]);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/todo/delete/" + id)
      .then((res) => {
        dispatch(deleteTodos({ id }));
        console.log(useSelector((state) => state.todos.todos));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navi />
      <div className="navv">
        <header>
          <h2>________PERSONAL -  TODOS </h2>
          {/* <nav>
            <ul>
              <li>
                <button className="home-btn">
                  <a href="/home">Home</a>
                </button>
              </li>
              <li>
                <button className="home-btn">
                  <a href="/todo">Add New</a>
                </button>
              </li>
            </ul>
          </nav> */}
        </header>
      </div>

      <div className="mainall">
        <div className="box1">
          <table className="tablex">
            <thead>
              <tr className="test">
                
                <th scope="col">Name</th>
                <th scope="col">Work</th>
                <th scope="col"></th>
                
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => {
                return (
                  <tr>
                    <td>{todo.name}</td>
                    <td>{todo.work}</td>
                    

                    <td>
                      <Link to={`/edit/${todo.id}`} className="btnx1">
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(todo.id)}
                        className="btnx1"
                      >
                        Delete
                      </button>
                      <Link to={`/todo/view/${todo.id}`} className="btnx1">
                        View
                      </Link>
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

export default todo_personal;
