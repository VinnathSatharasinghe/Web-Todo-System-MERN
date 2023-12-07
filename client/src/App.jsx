// // import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Users from "./redux/users";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Singup from "./singup";
import UP from "./redux/update";
import View from './redux/view'
import After_login from "./Employee/After_login";

const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <Users />,
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
    path: "/afterlog",
    element: <After_login />,
  },
  {
    path: "/edit/:id",
    element: <UP />,
  },
  {
    path: "/view/:id",
    element: <View />,
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

{
  /* <BrowserRouter>
<Users />
<Routes>
  <Route path="/home" element={<Home />}></Route>
  <Route path="/login" element={<Login />}></Route>
</Routes>
</BrowserRouter> */
}
