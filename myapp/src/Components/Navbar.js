import React from "react";

export default function Navbar(props) {
  const handletoggle = () => {
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
          <a className="navbar-brand" href="/">
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button
              className={`btn ${
                props.darkmode ? "btn-outline-light" : "btn-outline-dark"
              }`}
              type="submit"
              onClick={handletoggle}
            >
              {props.darkmode ? "Disable DarkMode🌕" : "Enable DarkMode🌑"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
