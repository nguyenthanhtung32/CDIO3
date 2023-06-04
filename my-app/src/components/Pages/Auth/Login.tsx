import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Styles from "./Login.module.css";

// interface IProps {
//   setIsLogin: (value: boolean) => void;
// }

const Login: React.FC = () => {
  //let params = useParams();
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>();
  const [userPassWord, setUserPassWord] = useState("");

  useEffect(() => {}, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // event of form
    e.preventDefault();
    console.log("handleSubmit", userName);
    console.log("handleSubmit:", userPassWord);

    if (userName === "HoangVinh" && userPassWord === "Vinh02") {
      alert("login thanh cong");
      navigate("/");
    } else {
      alert("login fail");
    }
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempvalue = e.target.value;
    console.log(e.target.value);
    setUserPassWord(tempvalue);
  };

  return (
    <>
      <div className={Styles.container}>
        <form className={Styles.form_1}>
          <h1 className={Styles.login}>Login</h1>
          <label htmlFor="name" className={Styles.label}>
            Tên đăng nhập
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className={Styles.input}
            onChange={handleName}
          />
          <label htmlFor="password" className={Styles.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className={Styles.input}
            onChange={handleAge}
          />
          <span className={Styles.span}>Forgot Password</span>
          <button className={Styles.button} onClick={(e: any) => handleSubmit(e)}>
            Login
          </button>
          <div className="d-flex justify-content-center ">
            <p className={Styles.text}>Don't have an acount ?</p>
            <Link to="/signup" className={Styles.text2}>
              SignUp
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
