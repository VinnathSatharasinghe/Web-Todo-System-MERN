import React from "react";
import "../Home/home.css";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";

// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function After_login() {

  const [work, setWork] = useState();
  const location = useLocation();
  const name = location.state ? location.state.name : null;

  const [errors, setErrors] = useState({
    work: "",
  });

  return (

    <div className="tests">
      <Navbar />
      <div className="home-page">
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
                  <a href="/gg">Login</a>
                </button>
              </li>
              <li>
                <button className="home-btn">
                  <a href="/sing">SINGUP</a>
                </button>
              </li>
              <li>
                <button className="home-btn">
                  <a href="/users">View</a>
                </button>
              </li>
              <li>
                <button className="home-btn">
                  <a href="#contact">CONTENT</a>
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="hero">
            <h2>Welcome , {name}!</h2>

            <p>wait.</p>
            <a href="/todo" className="cta-button">
              TODO
            </a>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              {/* <Form.Label>Username</Form.Label> */}
              <br />
              <input
                type="text"
                placeholder="Enter Username"
                autoComplete="off"
                name="name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                disabled
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicTodo">
  
            <input
              id="work"
              type="work1"
              placeholder="Enter Work"
              autoComplete="off "
              name="work"
              value={work}
              defaultValue={""}
              onChange={(e) => setWork(e.target.value)}
            />
            <div className="text-danger">{errors.work}</div>
          </Form.Group>

          </section>
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Winny Cafe</p>
        </footer>
      </div>
    </div>
  );
}

export default After_login;
