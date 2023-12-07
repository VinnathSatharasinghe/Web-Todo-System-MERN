import React from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div className="tests">
      <Navbar />
      <div className="home-page">
        <header>
          <nav>
            <ul>
              <li>
                <button className="home-btn">
                  <a href="#home">Home</a>
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
            <h1>Welcome to Our Impressive Website</h1>
            <p>Your go-to source for everything amazing.</p>
            <a href="/learn-more" className="cta-button">
              Learn More
            </a>
          </section>
          <section className="features">
            <div className="feature">
              <h2>Feature 1</h2>
              <p>Some cool feature description.</p>
              <br />
              <a href="/learn-more" className="cta-button">
                Learn More
              </a>
            </div>
            <div className="feature">
              <h2>Feature 2</h2>
              <p>Another awesome feature description.</p>
              <br />
              <a href="/learn-more" className="cta-button">
                Learn More
              </a>
            </div>
            <div className="feature">
              <h2>Feature 3</h2>
              <p>Yet another fantastic feature description.</p>
              <br />
              <a href="/learn-more" className="cta-button">
                Learn More
              </a>
            </div>
          </section>
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Winny Cafe</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
