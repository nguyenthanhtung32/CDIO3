import { Button, DatePicker, Input, Space } from "antd";
// import Styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      {/* <div className="container">
        <div className="row mt-3">
          <div className="col-12 col-md-3 col-content ">
            <p className="border-bottom p-3 mx-3">Trang Chủ</p>
            <p className="border-bottom p-3 mx-3">Kiểm Tra Vé</p>
            <p className="border-bottom p-3 mx-3">Hổ Trợ</p>
            <p className="border-bottom p-3 mx-3">Tin Tức</p>
          </div>

          <div className="col-12 col-md col-content">
            <h1 className="text-danger">Bus Travel</h1>
            <p>Mỗi chuyến đi luôn là một niềm vui.</p>
            <div className={Styles.background_img}>
              <div className={Styles.box}>
                <div className="d-flex justify-content-center mt-5">
                  <form className="d-flex  " role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Điểm đi"
                      aria-label="Search"
                    />
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Điểm đón"
                      aria-label="Search"
                    />
                    <button
                      className="btn bg-secondary text-white "
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3 col-content">
            <div className="p-3 mb-2 bg-secondary text-white text-center">
              <h2>GIÁ VÉ</h2>
              <p>TỐT NHẤT</p>
              <h2>THỦ TỤC</h2>
              <p>NHANH CHÓNG</p>
              <h2>ĐỐI TÁC</h2>
              <p>NHIỀU NHÀ XE</p>
            </div>
          </div>
        </div>
      </div> */}
      {
        <div style={{ position: "relative" }}>
          <img
            src="https://static.vexere.com/production/banners/910/leaderboard_1440x480-(2).jpg"
            alt=""
            style={{ width: "100%", marginBottom: "40px" }}
          />
          <div
            // className={Styles.title}
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
              <Input
                style={{  height: "50px" }}
                placeholder="Nơi xuất phát"
              />
              <Input placeholder="Nơi đến" />
              <DatePicker style={{ width: "200px" }} placeholder="Ngày đi" />
              <Button type="primary" ghost style={{ height: "50px" }}>
                Tìm Chuyến
              </Button>
            </Space.Compact>
          </div>
        </div>
      }
    </>
  );
}
