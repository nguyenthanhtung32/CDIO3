import React from "react";

const onFinish = (values: any) => {
  console.log("Success:", values);
  window.location.href = "/login";
};

const SignUp: React.FC = () => (
  <div style={{ padding: 20 }}>
    <form
      onSubmit={onFinish}
      className="w-50 mx-auto border border-success mt-5 mb-5"
    >
      <div className="mb-3 ms-5 me-5">
        <label className="form-label ">Tên đăng kí</label>
        <input
          className="form-control border-success"
          type="text"
          name="userName"
          //   defaultValue={userName}
          //   onChange={handleName}
        />
      </div>
      <div className="mb-3 ms-5 me-5">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control border-success"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3 ms-5 me-5">
        <label className="form-label ">Ngày sinh</label>
        <input
          className="form-control border-success"
          type="text"
          name="userName"
          //   defaultValue={userName}
          //   onChange={handleName}
        />
      </div>
      <div className="mb-3 ms-5 me-5">
        <label className="form-label ">Địa chỉ</label>
        <input
          className="form-control border-success"
          type="text"
          name="userName"
          //   defaultValue={userName}
          //   onChange={handleName}
        />
      </div>
      <div className="mb-3 ms-5 me-5">
        <label className="form-label">Mật khẩu</label>
        <input
          className="form-control border-success"
          type="password"
          name="userAge"
          //   defaultValue={userPassWord}
          //   onChange={handleAge}
        />
      </div>
      <div className="mb-3 ms-5 me-5">
        <label className="form-label">Nhập lại mật khẩu</label>
        <input
          className="form-control border-success"
          type="password"
          name="userAge"
          //   defaultValue={userPassWord}
          //   onChange={handleAge}
        />
      </div>
      <button type="submit" className="btn btn-success ms-5 mb-5" >
        Sign Up
      </button>
    </form>
  </div>
);

export default SignUp;
