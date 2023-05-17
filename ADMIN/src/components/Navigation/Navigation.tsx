import React from "react";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light mb-5">
      <div className="container-fluid ">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-dark"
                aria-current="page"
                href="/dashboard"
              >
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-dark"
                aria-current="page"
                href="/chuyenxe"
              >
                Chuyến xe
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-dark"
                aria-current="page"
                href="/vexe"
              >
                Vé xe
              </a>
            </li>

            <li className="nav-item ">
              <a className="nav-link text-dark" href="/khachhang">
                Khách hàng
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-dark" href="/lotrinh">
                Lộ trình
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-dark" href="/xe">
                Xe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/nhanvien">
                Nhân viên
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/thongke">
                Thống kê
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
