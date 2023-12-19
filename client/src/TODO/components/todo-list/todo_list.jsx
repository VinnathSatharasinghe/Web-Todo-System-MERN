import React, { useEffect, useState } from "react";
import Nav from "../../../Page/Navbar/Navbar";
import axios from "axios";
import "../../../Page/Login/Login.css";
import "../todo-list/list.css";
import { Link } from "react-router-dom";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todo list data including user information
    axios
      .get("http://localhost:3001/viewtask")
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
      <div className="mainall">
        <div className="box1">
          <h2>Todo List</h2>
          <br />
          <table className="tablex">
            <thead>
              <tr className="test">
                <th>Todo Title</th>
                <th>Todo Body</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo._id}>
                  {/* <td>{todo.user11}</td> */}
                  <td>{todo.title}</td>
                  <td>{todo.body}</td>
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

export default TodoList;

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
