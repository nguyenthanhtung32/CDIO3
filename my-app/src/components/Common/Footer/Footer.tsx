import styles from "./Footer.module.css";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';


function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_info}>
        <h2>Thông tin</h2>
        <ul>
          <li>Giới thiệu</li>
          <li>Tuyển dụng</li>
          <li>Quy chế hoạt động</li>
          <li>Chính sách bảo mật</li>
          <li>Quyền sở hữu trí tuệ</li>
          <li>Điều khoản sử dụng</li>
          <li>Liên hệ với chúng tôi</li>
        </ul>
      </div>
      <div className={styles.footer_service}>
        <h2>Dịch vụ</h2>
        <ul>
          <li>Bus Travel đảm bảo</li>
          <li>Vận chuyển</li>
          <li>Trung tâm trợ giúp</li>
          <li>Hỗ trợ khách hàng</li>
          <li>Thanh toán</li>
          <li>Tích Xu</li>
          <li>Voucher </li>
          <li>Bus Travel Blog</li>
        </ul>
      </div>
      <div className={styles.footer_follow}>
        <h2>Theo dõi chúng tôi trên</h2>
        <ul>
          <li>
            <IoLogoFacebook/>
            Facebook
          </li>
          <li>
            <IoLogoInstagram/>
            Instagram
          </li>
          <li>
            <IoLogoTwitter/>
            Twitter
          </li>
          <li>
            <IoLogoYoutube/>
            Youtube
          </li>
        </ul>
      </div>
      <div className={styles.footer_download}>
        <h2>Tải ứng dụng ngay thôi nào</h2>
        <ul>
          <li>
            <img
              src="https://cdn.wikimobi.vn/2018/07/cuoc-chien-cua-hai-cho-ung-dung-lon-nhat-google-play-store-appstore.jpeg"
              alt="Download"
            />
          </li>
        </ul>
      </div>
    </div>
    
  );
}

export default Footer;
