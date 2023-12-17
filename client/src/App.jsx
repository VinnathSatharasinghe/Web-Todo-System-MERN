// // import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Singup from "./Page/Singup/singup";
import Todo from "./TODO/Todo_Main/todo";
import Todo_list from "./TODO/components/todo-list/todo_list";
import Todo_personal from "./TODO/components/todo-list/todo_personal";
import Test from '../test'
import Ulist from './TODO/components/todo-list/user_list'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/user_list",
    element: <Ulist />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/gg",
    element: <Login />,
  },
  {
    path: "/sing",
    element: <Singup />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/todo_list",
    element: <Todo_list />,
  },
  {
    path: "/todo_personal",
    element: <Todo_personal />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
