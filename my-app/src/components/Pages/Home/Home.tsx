import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Button, DatePicker, Space } from "antd";
import { Select } from "antd";

import Header from "../../Common/Header/Header";
import styles from "./Home.module.scss";

interface IBooking {
  name: string;
  avatar: "https://hotel.web4s.vn/wp-content/uploads/2017/08/blog-7.jpg";
  id: string | number;
  title: string;
  sale: string;
}

const { Option } = Select;
const to = [
  { value: "HN", label: "Hà Nội" },
  { value: "HCM", label: "Hồ Chí Minh" },
  { value: "DN", label: "Đà Nẵng" },
  { value: "HP", label: "Hải Phòng" },
];

const from = [
  { value: "HN", label: "Hà Nội" },
  { value: "HCM", label: "Hồ Chí Minh" },
  { value: "DN", label: "Đà Nẵng" },
  { value: "HP", label: "Hải Phòng" },
];

function Home() {
  const navigate = useNavigate();
  const [listBooking, setListBooking] = useState<Array<IBooking>>([]);

  useEffect(() => {
    getListBooking();
  }, []);
  const getListBooking = () => {
    const url = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets";
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

  const [startingPoint, setStartingPoint] = useState(null);
  const [destination, setDestination] = useState(null);

  const handleStartingPointChange = (value: any) => {
    setStartingPoint(value);
  };

  const handleDestinationChange = (value: any) => {
    setDestination(value);
  };

  const handleDetail = (userId: string | number) => {
    console.log("handleDetail", userId);
    navigate(`detail/${userId}`);
  };

  return (
    <>
      <Header />
      <div style={{ position: "relative", marginTop: "80px" }}>
        <img
          src="https://static.vexere.com/production/banners/910/leaderboard.png"
          alt=""
          style={{ width: "100%", height: 400 }}
        />
        <div
          style={{
            position: "absolute",
            top: "32%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h2
            style={{
              color: "white",
              fontSize: "34px",
              fontWeight: 500,
              marginBottom: "0px",
              textAlign: "center",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            Cam Kết hoàn 150% nếu nhà xe không giữ vé
          </h2>
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Space.Compact>
            <Select
              value={startingPoint}
              onChange={handleStartingPointChange}
              placeholder="Nơi xuất phát"
              className={styles.C_option}
            >
              {to.map((option) => (
                <Option key={option.value} value={option.value} >
                  {option.label}
                </Option>
              ))}
            </Select>
            <Select
              value={destination}
              onChange={handleDestinationChange}
              placeholder="Nơi đến"
              className={styles.C_option}
            >
              {from.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
            <DatePicker
              style={{ width: "200px", height: "50px" }}
              placeholder="Ngày đi"
            />
            <Button
              type="primary"
              ghost
              style={{ height: "50px", backgroundColor: "rgb(255, 211, 51)" }}
            >
              Tìm Chuyến
            </Button>
          </Space.Compact>
        </div>
      </div>

      <section className={styles.product_list}>
        <div className={styles.container}>
          <h2 className={styles.product_title}>Các nhà xe hiện nay</h2>
          <div className={styles.row}>
            {listBooking.map((item) => (
              <div className={styles.item}>
                <div className={styles.product}>
                  <div className={styles.product_thumb}>
                    <img
                      src={item.avatar}
                      className={styles.pro_thumb_img}
                      alt="..."
                    />

                    <div className={styles.product_styles}>
                      <span
                        className={styles.active_style}
                        data-image=""
                        style={{ backgroundColor: "tomato" }}
                      ></span>

                      <span
                        className=""
                        data-image=""
                        style={{ backgroundColor: "royalblue" }}
                      ></span>

                      <span
                        className=""
                        data-image=""
                        style={{ backgroundColor: "seagreen" }}
                      ></span>
                    </div>

                    <div className={styles.product_button}>
                      <a title="Wishlist">
                        <i onClick={() => handleDetail(item.id)}>Xem ngay</i>
                      </a>
                    </div>
                  </div>

                  <div className={styles.product_info}>
                    <div className={styles.rating}>
                      <i>
                        <AiFillStar />
                      </i>
                      <i>
                        <AiFillStar />
                      </i>
                      <i>
                        <AiFillStar />
                      </i>
                      <i>
                        <AiFillStar />
                      </i>
                      <i>
                        <AiOutlineStar />
                      </i>
                    </div>
                    <h3 className={styles.product_name}>{item.name}</h3>
                    <div className={styles.off_info}>
                      <h2 className={styles.sm_title}>{item.sale}</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.product_list}>
        <div className={styles.container}>
          <h2 className={styles.product_title}>Các ưu đãi nổi bật</h2>
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
                  <p className="card-text">
                    Giới thiệu bạn mới - Nhận quà khủng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.product_list}>
        <div className={styles.container}>
          <h2 className={styles.product_title}>
            Nền tảng kết nối người dùng và nhà xe
          </h2>
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
                  <b style={{ fontSize: "18px" }}>
                    2000+ nhà xe chất lượng cao
                  </b>
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
                    Đặt vé chỉ với 60s. Chọn xe yêu thích cực nhanh và thuận
                    tiện.
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
                    Hoàn ngay 150% nếu không có vé, mang đến hành trình trọn
                    vẹn.
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
      </section>
    </>
  );
}

export default Home;
