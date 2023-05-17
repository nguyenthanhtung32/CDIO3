import { Link } from "react-router-dom";
import Styles from "./Navigation.module.css";
import { Button } from "antd";

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark text-50">
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
            {/* <ul className="navbar-nav">
              <li className="nav-item d-flex">
                <IoLogoWhatsapp />
                <p>090536897</p>
              </li>
            </ul> */}
            <img
              src="https://storage.googleapis.com/fe-production/icon_vxr_full.svg"
              style={{ marginLeft: "40px" }}
              alt=""
            />
          </div>
          <div>
           
            <Button type="primary" ghost>
              <Link to="/signup" className={Styles.link}>
                Đăng kí
              </Link>
            </Button>
            <Button type="primary" ghost>
              <Link to="/login" className={Styles.link}>
                Đăng nhập
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
