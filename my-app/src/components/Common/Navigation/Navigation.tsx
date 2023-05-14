import { Link } from "react-router-dom";
import Styles from "./Navigation.module.css"

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/form"} className="nav-link">
                  Form
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/detail"} className="nav-link">
                  Detail
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/list"} className="nav-link">
                  List
                </Link>
              </li>
            </ul>
          </div>
          <div>
          <Link to="/signup" className={Styles.link}>Đăng kí</Link>
            <Link to="/login" className={Styles.link}>Đăng nhập</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
