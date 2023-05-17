import React from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  setIsLogin: (value: boolean) => void;
}

const Header: React.FC<IProps> = (props) => {
  const { setIsLogin } = props;
  const navigate = useNavigate();
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/dashboard">
          Vé Xe
        </a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
          <button
            type="button"
            className="btn btn-dark mx-3"
            onClick={() => {
              setIsLogin(false);
              navigate(`/`);
            }}
          >
            Logout
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
