import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Styles from "./DetailRoute.module.css";
import { GrLinkNext } from "react-icons/gr";
interface IUser {
  nameTai: string;
  id: any;
  BienSo: string;
  intendtime: string;
  phoneNumber: string;
  start: string;
  end: string;
  timeStart: string;
  price: string;
  name: string;
  avatar: string;
  sale: string;
  nameTai1: string;
  BienSo1: string;
  intendtime1: string;
  phoneNumber1: string;
  start1: string;
  end1: string;
  timeStart1: string;
  price1: string;
}

function UserDetail() {
  const navigate = useNavigate();
  let params = useParams();
  const [open, setOpen] = React.useState<boolean>(false);
  const [user, setUser] = useState<IUser | undefined>({
    nameTai: "",
    id: "",
    BienSo: "",
    intendtime: "",
    phoneNumber: "",
    start: "",
    end: "",
    timeStart: "",
    price: "",
    name: "",
    avatar: "",
    sale: "",
    nameTai1: "",
    BienSo1: "",
    intendtime1: "",
    phoneNumber1: "",
    start1: "",
    end1: "",
    timeStart1: "",
    price1: "",
  });
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    const url =
      "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets/" + params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.error("Success", data);
        setUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDetail = (userId: string | number) => {
    navigate(`detail/${userId}`);
  };

  const handleDetail1 = (userId: string | number) => {
    navigate(`detail1/${userId}`);
  };



  return (
    <>
      <div
        className={Styles.product}
        style={{ transition: "transform 0.2s ease-in-out" }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "")}
      >
        <img className={Styles.product_images} alt="" src={user?.avatar}></img>
        <div className={Styles.product_details}>
          <h2 className={Styles.h2}>{user?.name}</h2>
          <h3 className={Styles.h3}>
            Tuyến:
            <span style={{ color: "#ff3300", fontWeight: "bold" }}>
              {user?.start}
            </span>
            <GrLinkNext />
            <span style={{ color: "#ff3300", fontWeight: "bold" }}>
              {user?.end}
            </span>
          </h3>
          <h3 className={Styles.h3}>
            Giá:
            <span style={{ color: "#ff3300", fontWeight: "bold" }}>
              {user?.price}
            </span>
          </h3>
          <div className={Styles.about}>
            <p className={Styles.p}>
              Giờ bắt đầu: <span>{user?.timeStart}</span>
            </p>
            <p className={Styles.p}>
              Thời gian di chuyển dự kiến: <span>{user?.intendtime}</span>
            </p>
          </div>
          <div className="d-flex">
            <div className={Styles.cta}>
              <div
                className={`${Styles.btn} ${Styles.btn_primary}`}
                onClick={() => handleDetail(user?.id)}
              >
                Xem chi tiết
              </div>
            </div>
            <div className={Styles.cta}>
              <div className={`${Styles.btn} ${Styles.btn_primary}`}>
                Thêm vào giỏ hàng
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={Styles.product}
        style={{ transition: "transform 0.2s ease-in-out" }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "")}
      >
        <img className={Styles.product_images} alt="" src={user?.avatar}></img>
        <div className={Styles.product_details}>
          <h2 className={Styles.h2}>{user?.name}</h2>
          <h3 className={Styles.h3}>
            Tuyến:
            <span style={{ color: "#ff3300", fontWeight: "bold" }}>
              {user?.start1}
            </span>
            <GrLinkNext />
            <span style={{ color: "#ff3300", fontWeight: "bold" }}>
              {user?.end1}
            </span>
          </h3>
          <h3 className={Styles.h3}>
            Giá:
            <span style={{ color: "#ff3300", fontWeight: "bold" }}>
              {user?.price1}
            </span>
          </h3>
          <div className={Styles.about}>
            <p className={Styles.p}>
              Giờ bắt đầu: <span>{user?.timeStart1}</span>
            </p>
            <p className={Styles.p}>
              Thời gian di chuyển dự kiến: <span>{user?.intendtime1}</span>
            </p>
          </div>
          <div className="d-flex">
            <div className={Styles.cta}>
              <div
                className={`${Styles.btn} ${Styles.btn_primary}`}
                onClick={() => handleDetail1(user?.id)}
              >
                Xem chi tiết
              </div>
            </div>
            <div className={Styles.cta}>
              <div className={`${Styles.btn} ${Styles.btn_primary}`}>
              Thêm vào giỏ hàng
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetail;
