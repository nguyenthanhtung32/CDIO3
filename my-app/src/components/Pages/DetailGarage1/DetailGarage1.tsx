import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "../DetailGarage/Detail.module.css";

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

export default function Detail() {
  let params = useParams();
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

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-6" style={{ marginTop: 80 }}>
            <div className="card">
              <table className="table">
                <thead className={Styles.clgreen}>
                  <tr>
                    <td>Thông tin khởi hành</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr className={Styles.clnhat}>
                    <td>Giờ khởi hành</td>
                    <td>{user?.timeStart1}</td>
                  </tr>
                  <tr>
                    <td>Địa điểm</td>
                    <td>{user?.start1}</td>
                  </tr>
                  <tr className={Styles.clnhat}>
                    <td>Giá vé</td>
                    <td>{user?.price1}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-sm-6" style={{ marginTop: 80 }}>
            <div className="card">
              <table className="table">
                <thead className={Styles.clgreen}>
                  <tr>
                    <td>Thông tin xe</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr className={Styles.clnhat}>
                    <td>Tên xe</td>
                    <td>{user?.name}</td>
                  </tr>
                  <tr>
                    <td>Tên tài xế</td>
                    <td>{user?.nameTai1}</td>
                  </tr>
                  <tr className={Styles.clnhat}>
                    <td>Số điện thoại</td>
                    <td>{user?.phoneNumber1}</td>
                  </tr>
                  <tr>
                    <td>Biển số xe</td>
                    <td>{user?.BienSo1}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-sm-6" style={{ marginTop: 10 }}>
            <div className="card">
              <table className="table">
                <thead className={Styles.clgreen}>
                  <tr>
                    <td>Thông tin điểm đến</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr className={Styles.clnhat}>
                    <td>Thời gian dự kiến</td>
                    <td>{user?.intendtime1}</td>
                  </tr>
                  <tr>
                    <td>Địa điểm</td>
                    <td>{user?.end1}</td>
                  </tr>
                  <tr className={Styles.clnhat}>
                    <td>Giá vé</td>
                    <td>{user?.price1}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
