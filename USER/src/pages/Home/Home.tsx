import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Styles from "./Home.module.css";

interface IBooking {
  name: string;
  avatar: "https://hotel.web4s.vn/wp-content/uploads/2017/08/blog-7.jpg";
  id: string | number;
  title: string;
}

interface IRouters {
  name: string;
  avatar: "https://hotel.web4s.vn/wp-content/uploads/2017/08/blog-7.jpg";
  id: string | number;
  price: string;
}

function Home() {
  const [listBooking, setListBooking] = useState<Array<IBooking>>([]);
  const [listRouters, setListRouters] = useState<Array<IRouters>>([]);

  useEffect(() => {
    getListBooking();
    getListRouters();
  }, []);
  const getListBooking = () => {
    const url = "https://645de14b8d08100293f117de.mockapi.io/cars";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setListBooking(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const getListRouters = () => {
    const url = "https://645de14b8d08100293f117de.mockapi.io/routes";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setListRouters(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Header />
      <div className="container ">
        <h4>Các nhà xe nổi bật</h4>
        <div className="row text-center">
          {listBooking.map((item) => (
            <div className="col-xl-3 col-sm-12 col-md-6">
              <Link
                to={`/list`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div
                  key={item.id}
                  style={{ transition: "transform 0.2s ease-in-out" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) => (e.currentTarget.style.transform = "")}
                >
                  <div
                    className="mb-5 "
                    style={{
                      width: "18rem",
                      borderRadius: "20px",
                      boxShadow:
                        "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
                      backgroundImage:
                        "linear-gradient(to right,#f2994a,#f2c94c)",
                    }}
                  >
                    <img
                      src={item.avatar}
                      className="card-img-top"
                      style={{ height: "170px" }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title mx-5">{item.name}</h5>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <h4>Các tuyến đường nổi bật</h4>
        <div className="row text-center">
          {listRouters.map((item) => (
            <div className="col-xl-3 col-sm-12 col-md-6">
              <div
                key={item.id}
                style={{ transition: "transform 0.2s ease-in-out" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) => (e.currentTarget.style.transform = "")}
              >
                <div
                  className="card mb-5 "
                  style={{
                    width: "18rem",
                    borderRadius: "20px",
                    boxShadow:
                      "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
                  }}
                >
                  <img
                    src={item.avatar}
                    className="card-img-top"
                    style={{ height: "170px" }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-danger">{item.name}</h5>
                    <h5 style={{ marginBottom: "20px" }}>{item.price}</h5>
                    <Link to={"/detail"} className={Styles.buy_now}>
                      Xem Chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h4>Các ưu đãi nổi bật</h4>
        <div className="row text-center">
          <div className="col-xl-3 col-sm-12 col-md-6">
            <div
              className="card"
              style={{
                width: "18rem",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "")}
            >
              <img
                src="https://storage.googleapis.com/vex-config/cms-tool/post/images/163/img_card.png?v=3"
                className="card-img-top"
                style={{ height: "170px" }}
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Ưu đãi các tuyến đường HOT giảm đến 50%
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-12 col-md-6">
            <div
              className="card"
              style={{
                width: "18rem",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "")}
            >
              <img
                src="https://storage.googleapis.com/vex-config/cms-tool/post/images/161/img_card.png?v=3"
                className="card-img-top"
                style={{ height: "170px" }}
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Dành cho khách hàng mới - Giảm đến 25% khi đặt vé
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-12 col-md-6">
            <div
              className="card"
              style={{
                width: "18rem",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "")}
            >
              <img
                src="https://storage.googleapis.com/vex-config/cms-tool/post/images/137/img_card.png"
                className="card-img-top"
                style={{ height: "170px" }}
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Tổng hợp các chương trình khuyến mãi trong tháng
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-12 col-md-6">
            <div
              className="card"
              style={{
                width: "18rem",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "")}
            >
              <img
                src="https://storage.googleapis.com/vex-config/cms-tool/post/images/166/img_card.png"
                className="card-img-top"
                style={{ height: "170px" }}
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Giới thiệu bạn mới - Nhận quà khủng</p>
              </div>
            </div>
          </div>
        </div>
        <h4 className="mt-5">Nền tảng kết nối người dùng và nhà xe</h4>
        <div className="row mb-5">
          <div className="col-xl-3 col-sm-12 col-md-6">
            <div
              style={{
                width: "18rem",
                transition: "transform 0.2s ease-in-out",
                border: "1px solid #cccc",
                borderRadius: "5px",
                display: "flex",
                height: "150px",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "")}
            >
              <img
                src="https://storage.googleapis.com/fe-production/svgIcon/bus-car-icon.svg"
                alt=""
                style={{ width: "70px" }}
              />
              <div className="card-body mt-1">
                <b style={{ fontSize: "18px" }}>2000+ nhà xe chất lượng cao</b>
                <p className="mt-2">
                  5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa
                  chọn.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-12 col-md-6">
            <div
              style={{
                width: "18rem",
                transition: "transform 0.2s ease-in-out",
                border: "1px solid #cccc",
                borderRadius: "5px",
                display: "flex",
                height: "150px",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "")}
            >
              <img
                src="https://storage.googleapis.com/fe-production/svgIcon/yellow-ticket-icon.svg"
                alt=""
                style={{ width: "70px" }}
              />
              <div className="mt-1 ">
                <b style={{ fontSize: "18px" }}>Đặt vé dễ dàng</b>
                <p className="mt-2">
                  Đặt vé chỉ với 60s. Chọn xe yêu thích cực nhanh và thuận tiện.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-12 col-md-6">
            <div
              style={{
                width: "18rem",
                transition: "transform 0.2s ease-in-out",
                border: "1px solid #cccc",
                borderRadius: "5px",
                display: "flex",
                height: "150px",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "")}
            >
              <img
                src="https://storage.googleapis.com/fe-production/svgIcon/completement-icon.svg"
                alt=""
                style={{ width: "70px" }}
              />
              <div className="card-body mt-1">
                <b style={{ fontSize: "18px" }}>Đảm bảo có vé</b>
                <p className="mt-2">
                  Hoàn ngay 150% nếu không có vé, mang đến hành trình trọn vẹn.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-12 col-md-6">
            <div
              style={{
                width: "18rem",
                transition: "transform 0.2s ease-in-out",
                border: "1px solid #cccc",
                borderRadius: "5px",
                display: "flex",
                height: "150px",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "")}
            >
              <img
                src="https://storage.googleapis.com/fe-production/svgIcon/coupon-icon.svg"
                alt=""
                style={{ width: "70px" }}
              />
              <div className="card-body mt-1">
                <b style={{ fontSize: "18px" }}>Nhiều ưu đãi</b>
                <p className="mt-2">
                  Hàng ngàn ưu đãi cực chất độc quyền tại VeXeRe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
