import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../Page/Login/Login.css";
import Nav from "../../../Page/Navbar/Navbar";

function TodoList() {
  const [todos, setTodos] = useState([]);

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
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.name}</td>
                  <td>{todo.email}</td>
                  {/* <td>{todo.password}</td> */}
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

// function todo_personal() {

//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos.todos);
//   console.log(useSelector((state) => state.todos.todos));

//   const location = useLocation();
//   const name = location.state ? location.state.name : null;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/todos");
//         dispatch(getTodos(response.data));
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [dispatch, name]);

//   const handleDelete = (id) => {
//     axios
//       .delete("http://localhost:3001/todo/delete/" + id)
//       .then((res) => {
//         dispatch(deleteTodos({ id }));
//         console.log(useSelector((state) => state.todos.todos));
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <Navi />
//       <div className="navv">
//         <header>
//           <h2>________PERSONAL -  TODOS </h2>
//           {/* <nav>
//             <ul>
//               <li>
//                 <button className="home-btn">
//                   <a href="/home">Home</a>
//                 </button>
//               </li>
//               <li>
//                 <button className="home-btn">
//                   <a href="/todo">Add New</a>
//                 </button>
//               </li>
//             </ul>
//           </nav> */}
//         </header>
//       </div>

//       <div className="mainall">
//         <div className="box1">
//           <table className="tablex">
//             <thead>
//               <tr className="test">

//                 <th scope="col">Name</th>
//                 <th scope="col">Work</th>
//                 <th scope="col"></th>

//               </tr>
//             </thead>
//             <tbody>
//               {todos.map((todo) => {
//                 return (
//                   <tr>
//                     <td>{todo.name}</td>
//                     <td>{todo.work}</td>

//                     <td>
//                       <Link to={`/edit/${todo.id}`} className="btnx1">
//                         Edit
//                       </Link>
//                       <button
//                         onClick={() => handleDelete(todo.id)}
//                         className="btnx1"
//                       >
//                         Delete
//                       </button>
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

// export default todo_personal;
