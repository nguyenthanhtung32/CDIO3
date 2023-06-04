import React from "react";
import Styles from "./Login.module.css";

const onFinish = (e: any) => {
  console.log("Success:", e);
};

const SignUp: React.FC = () => (
  <div className={Styles.container} style={{marginTop:60}}>
    <form className={Styles.form_1}>
      <h1 className={Styles.login}>Đăng kí</h1>
      <label htmlFor="name" className={Styles.label}>
        Tên đăng kí
      </label>
      <input
        type="text"
        name="name"
        id="name"
        required
        className={Styles.input}
      />
      <label htmlFor="email" className={Styles.label}>
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        required
        className={Styles.input}
      />
      <label className={Styles.label}>Ngày Sinh</label>
      <input type="text" required className={Styles.input} />
      <label className={Styles.label}>Địa chỉ</label>
      <input type="text" required className={Styles.input} />
      <label htmlFor="password" className={Styles.label}>
        Mật khẩu
      </label>
      <input
        type="password"
        name="password"
        id="password"
        required
        className={Styles.input}
      />
      <label htmlFor="password" className={Styles.label}>
        Nhập lại mật khẩu
      </label>
      <input
        type="password"
        name="password"
        id="password"
        required
        className={Styles.input}
      />
      <span className={Styles.span}>Forgot Password</span>
      <button className={Styles.button} onClick={(e: any) => onFinish(e)}>
        Đăng kí
      </button>
    </form>
  </div>
);

export default SignUp;
