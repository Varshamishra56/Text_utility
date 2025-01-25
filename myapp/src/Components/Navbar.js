import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const handleToggle = () => {
    if (props.darkmode) {
      props.setdarkMode(false);
      props.showalert("Dark Mode is Disabled", "success");
    } else {
      props.setdarkMode(true);
      props.showalert("Dark Mode is Enabled", "success");
    }
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg ${
          props.darkmode ? "bg-dark navbar-dark" : "bg-light navbar-light"
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Contact
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Feedback
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex justify-content-center gap-1 py-2 mx-5">
              <div
                className="rounded-circle bg-danger border"
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
                title="Red"
                onClick={() => props.showalert("Red Color Selected", "info")}
              ></div>
              <div
                className="rounded-circle bg-primary border"
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
                title="Blue"
                onClick={() => props.showalert("Blue Color Selected", "info")}
              ></div>
              <div
                className="rounded-circle bg-success border"
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
                title="Green"
                onClick={() => props.showalert("Green Color Selected", "info")}
              ></div>
              <div
                className="rounded-circle bg-warning border"
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
                title="Orange"
                onClick={() => props.showalert("Orange Color Selected", "info")}
              ></div>
              <div
                className="rounded-circle border"
                style={{
                  width: "20px",
                  height: "20px",
                  cursor: "pointer",
                  backgroundColor: "pink",
                }}
                title="Pink"
                onClick={() => props.showalert("Pink Color Selected", "info")}
              ></div>
            </div>
            <button
              className={`btn ${
                props.darkmode ? "btn-outline-light" : "btn-outline-dark"
              }`}
              type="button"
              onClick={handleToggle}
            >
              {props.darkmode ? "Disable Dark Mode 🌕" : "Enable Dark Mode 🌑"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
