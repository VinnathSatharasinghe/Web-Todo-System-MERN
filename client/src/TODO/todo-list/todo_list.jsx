import React from "react";
import "../../redux/users.css";
// import { Link } from "react-router-dom";
import Navi from "../../Navbar/Navbar";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteTodos, getTodos } from "../redux-todo/todo_userSlice";
import { useState, useEffect } from "react";

// function todo_list() {

const TaskTable = () => {
  // State to store the list of tasks
  const [taskList, setTaskList] = useState([]);

  // Fetch data from the "/viewtask" endpoint when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/viewtask");
        const data = await response.json();
        setTaskList(data.list);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <Navi />
      <div className="mainall">
        <div className="box1">
          <h2>Task List</h2>
          <br />

          <table className="tablex">
            <thead>
              <tr>
                <th>User DB_ID</th>
                <th>Task Title</th>
                <th>Task Body</th>
                {/* Add more table headers as needed */}
              </tr>
            </thead>
            <tbody>
              {taskList.map((task) => (
                <tr key={task.name}>
                  <td>{task.user11}</td>
                  <td>{task.title}</td>
                  <td>{task.body}</td>
                  {/* Add more table cells for additional task properties */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// }

export default TaskTable;

// const List = useSelector((state) => state.list.list);
// console.log(useSelector((state) => state.todos.todos));
// const dispatch = useDispatch();

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:3001/viewtask");
//       dispatch(getTodos(response.data));
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   fetchData();
// }, []);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//          const todo =  await axios.get("http://localhost:3001/viewtask/:id");
//          console.log(todo)
//       // dispatch(getTodos(response.data));
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   fetchData();
// }, []);

// const handleDelete = (id) => {
//   axios
//     .delete("http://localhost:3001/todo/delete/" + id)
//     .then((res) => {
//       dispatch(deleteTodos({ id }));
//       console.log(useSelector((state) => state.todos.todos));
//     })
//     .catch((err) => console.log(err));
// };

// return (
//   <div>
//     <Navi />
//     <div className="navv">
//       <header>
//         <h2>_________---_All TODOS__________</h2>

{
  /* <nav>
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
          </nav> */
}

//   </header>
// </div>

// <div className="mainall">
//   <div className="box1">
//     <table className="tablex">
//       <thead>
//         <tr className="test">
//           <th scope="col">Name</th>
//           <th scope="col">Title</th>
//           <th scope="col">Body</th>
//           <th scope="col"></th>

//         </tr>
//       </thead>
//       <tbody>
//         {List.map((list) => {
//           return (
//             <tr>
//               <td>{list.name}</td>
//               <td>{list.title}</td>
//               <td>{list.body}</td>

//               <td>
//                 <Link to={`/edit/${todo.id}`} className="btnx1">
//                   Edit
//                 </Link>

{
  /* <button
                        onClick={() => handleDelete(todo.id)}
                        className="btnx1"
                      >
                        Delete
                      </button> */
}

//                       <Link to={`/todo/view/${todo.id}`} className="btnx1">
//                         View
//                       </Link>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
