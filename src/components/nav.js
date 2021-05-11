import React from "react";
import "../../src/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-custom ">
        <div class="container-fluid">
          <a class="navbar-brand" href="./index.html">Uzo Obeki</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="#about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="./Pages/portfolio.html">Portfolio</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="https://github.com/uzobeki" target="_blank" rel="noreferrer">GitHub</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="https://www.linkedin.com/in/uobeki/" target="_blank" rel="noreferrer">LinkedIn</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="./Assets/Resume/Uzo Obeki.pdf" download="Uzo Obeki" target="_blank">My Resume</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="./Pages/contact.html">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Navigation