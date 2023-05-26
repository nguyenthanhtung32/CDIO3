import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      navigate('/');
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
    <form
      onSubmit={handleSubmit}
      className="w-50 mx-auto border border-success mt-5 mb-5"
    >
      <div className="mb-3 ms-5 me-5">
        <label className="form-label ">Tên đăng nhập</label>
        <input
          className="form-control border-success"
          type="text"
          name="userName"
          defaultValue={userName}
          onChange={handleName}
        />
      </div>
      <div className="mb-3 ms-5 me-5">
        <label className="form-label">Mật khẩu</label>
        <input
          className="form-control border-success"
          type="password"
          name="userAge"
          defaultValue={userPassWord}
          onChange={handleAge}
        />
      </div>

      <button type="submit" className="btn btn-success ms-5 mb-5">
        Login
      </button>
    </form>
  );
};

export default Login;