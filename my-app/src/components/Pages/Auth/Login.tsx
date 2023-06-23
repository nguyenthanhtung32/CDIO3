import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

import Styles from "./Login.module.css";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>();
  const [userPassWord, setUserPassWord] = useState("");

  useEffect(() => {}, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userName === "HoangVinh" && userPassWord === "Vinh02") {
      message.success("Đăng nhập thành công!", 1.5);
      navigate("/");
    } else {
      message.warning("Đăng nhập thất bại!", 1.5);
    }
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempvalue = e.target.value;
    setUserPassWord(tempvalue);
  };

  return (
    <>
      <div className={Styles.container}>
        <form className={Styles.form_1}>
          <h1 className={Styles.login}>Đăng nhập</h1>
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
            Mật khẩu
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className={Styles.input}
            onChange={handleAge}
          />
          <span className={Styles.span}>Quên mật khẩu</span>
          <button
            className={Styles.button}
            onClick={(e: any) => handleSubmit(e)}
          >
            Đăng nhập
          </button>
          <div className="d-flex justify-content-center ">
            <p className={Styles.text}>Chưa có tài khoản ?</p>
            <Link to="/signup" className={Styles.text2}>
              Đăng kí
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
