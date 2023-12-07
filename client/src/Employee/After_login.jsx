import React from "react";
import "../Home/home.css";
import Navbar from "../Navbar/Navbar";

function After_login() {


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
            <h2>Welcome </h2>

            <p>Your go-to source for everything amazing.</p>
            <a href="/learn-more" className="cta-button">
              Learn More
            </a>
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
