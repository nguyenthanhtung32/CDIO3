import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Styles from "./Detail.module.css";

export default function Detail() {
  return (
    <>
      <Header />
      <div className="container">
        <div
          className={Styles.product}
          style={{ transition: "transform 0.2s ease-in-out" }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "")}
        >
          <div className={Styles.product_images}></div>
          <div className={Styles.product_details}>
            <div className={Styles.name}>
              <h2>Phúc An Express</h2>
            </div>
            <div>
              <p>Limousine giường nằm 22 chỗ (có toilet)</p>
              <div className="d-flex">
                <h4>21:30 </h4>
                <span>• VP Sài Gòn</span>
              </div>
              <span>9h10m</span>
              <div className="d-flex">
                <h4>06:40</h4>
                <span>• VP Nha Trang</span>
              </div>
            </div>
          </div>
          <div className={Styles.aaaa}>
            <div className={Styles.price}>
              <h3>450.000đ</h3>
            </div>
            <div className={Styles.car}>
              <div className="btn btn-warning">Thêm vào giỏ hàng</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className={Styles.product}
        style={{ transition: "transform 0.2s ease-in-out" }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "")}
      >
        <div className={Styles.product_images_anh2}></div>
        <div className={Styles.product_details}>
          <div className={Styles.name}>
            <h2>Huỳnh Gia</h2>
          </div>
          <div>
            <p>Giường nằm 38 chỗ (WC)</p>
            <div className="d-flex">
              <h4>11:00 </h4>
              <span>• VP Phạm Ngũ Lão</span>
            </div>
            <span>10h</span>
            <div className="d-flex">
              <h4>21:00</h4>
              <span>• VP Nha Trang</span>
            </div>
          </div>
        </div>
        <div>
          <div className={Styles.price}>
            <h3>260.000đ</h3>
          </div>
          <div className={Styles.car2}>
            <div className="btn btn-warning me-2">Thêm vào giỏ hàng</div>
            <div className="btn btn-outline-secondary">
              <span className="material-symbols-outlined">
                Thêm vào yêu thích
              </span>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div
        className={Styles.product}
        style={{ transition: "transform 0.2s ease-in-out" }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "")}
      >
        <div className={Styles.product_images_anh3}></div>
        <div className={Styles.product_details}>
          <div className={Styles.name}>
            <h2>Bình Minh Bus</h2>
          </div>
          <div>
            <p>Limousine phòng đôi 24 chỗ</p>
            <div className="d-flex">
              <h4>22:20 </h4>
              <span>• VP Sài Gòn</span>
            </div>
            <span>8h30m</span>
            <div className="d-flex">
              <h4>06:50</h4>
              <span>• VP Nha Trang</span>
            </div>
          </div>
        </div>
        <div>
          <div className={Styles.price}>
            <h3>420.000đ</h3>
          </div>
          <div className={Styles.car1}>
            <div className="btn btn-warning me-2">Thêm vào giỏ hàng</div>
            <div className="btn btn-outline-secondary">
              <span className="material-symbols-outlined">
                Thêm vào yêu thích
              </span>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
}
