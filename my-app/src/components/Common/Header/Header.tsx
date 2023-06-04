import Styles from "./Header.module.css";
import { Link } from "react-router-dom";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function Header() {
  return (
    <>
      <header className={Styles.header_container}>
        <div className={Styles.left_nav_links}>
          <div>
            <Link to="/">
              <img
                className={Styles.logo}
                src="https://www.milanoplatinum.com/wp-content/uploads/2015/11/THE-MALL_logo_MilanoPlatinum.png"
                alt="Logo"
              />
            </Link>
            <Link to="/" className={Styles.home}>
              Trang chủ
            </Link>
            <Link to="/all-products" className={Styles.home}>
              Vé
            </Link>
            <Link to="#" className={Styles.home}>
              Hotine : 0903456789
            </Link>
          </div>
        </div>
        <div className={Styles.right_nav_links}>
          <div>
            <div className={Styles.search}>
              <Link to="/all-products">
                <SearchOutlined />
              </Link>
            </div>
            <div className={Styles.cart_container}>
              <Link to="/cart">
                <ShoppingCartOutlined className={Styles.cart_icon} />
              </Link>
            </div>
            <div className={Styles.authentication_links}>
              <Link to="/login" className={Styles.link}>
                <UserOutlined />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
