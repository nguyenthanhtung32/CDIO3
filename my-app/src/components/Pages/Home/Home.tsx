import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="container ">
        <h3>Các nhà xe nổi bật</h3>
        <div className="row text-center">
          {listBooking.map((item) => (
            <div className="col-xl-3 col-sm-12 col-md-6">
              <div key={item.id} className="">
                <div className="card mb-5 " style={{ width: "18rem" }}>
                  <img
                    src={item.avatar}
                    className="card-img-top"
                    style={{ height: "170px" }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="btn btn-danger mt-2">
                      <Link to={"/list"} className="nav-link">
                        Xem Chi tiết
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3>Các tuyến đường nổi bật</h3>
        <div className="row text-center">
          {listRouters.map((item) => (
            <div className="col-xl-3 col-sm-12 col-md-6">
              <div key={item.id} className="">
                <div className="card mb-5 " style={{ width: "18rem" }}>
                  <img
                    src={item.avatar}
                    className="card-img-top"
                    style={{ height: "170px" }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-danger">{item.name}</h5>
                    <h5 className="p-3 mb-2 bg-secondary text-white">
                      {item.price}
                    </h5>
                    <p className="btn btn-danger">
                      <Link to={"/list"} className="nav-link">
                        Xem Chi tiết
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3>Các ưu đãi nổi bật</h3>
        <div className="row text-center">
          <div className="col-xl-3 col-sm-12 col-md-6">
            <div className="card" style={{ width: "18rem" }}>
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
            <div className="card" style={{ width: "18rem" }}>
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
            <div className="card" style={{ width: "18rem" }}>
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
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://storage.googleapis.com/vex-config/cms-tool/post/images/166/img_card.png"
                className="card-img-top"
                style={{ height: "170px" }}
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Giới thiệu bạn mới - Nhận quà khủng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
