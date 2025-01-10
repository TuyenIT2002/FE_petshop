import { Link } from 'react-router-dom';
import config from '~/components/config/config';
import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-footer-top')}>
                <div className={cx('footer-contact')}>
                    <h3>Liên hệ</h3>
                    <p>
                        <FontAwesomeIcon className={cx('icon', 'icon-address')} icon={faLocationDot} />
                        <a href="#">P1615 Tháp C Hồ Gươm Plaza - 102 Trần Phú - Hà Đông - Hà Nội</a>
                    </p>
                    <p>
                        <FontAwesomeIcon className={cx('icon', 'icon-phone')} icon={faPhone} />
                        <a>0782082098</a>
                    </p>
                    <p>
                        <FontAwesomeIcon className={cx('icon', 'icon-mail')} icon={faEarthAmericas} />
                        <a href="mailto:tuyenlinh15081405@gmail.com">tuyenlinh15081405@gmail.com</a>
                    </p>
                </div>
                <div className={cx('footer-policy')}>
                    <ul>
                        <h3>Chính sách và quy định</h3>
                        <li>Chính sách bảo hành</li>
                        <li>Chính sách bảo mật thông tin</li>
                        <li>Chính sách đổi trả</li>
                        <li>Quy định & điều khoản</li>
                    </ul>
                </div>
                <div className={cx('footer-support')}>
                    <ul>
                        <h3>Hỗ trợ khách hàng</h3>
                        <li>Hướng dẫn đặt hàng</li>
                        <li>Hướng dẫn thanh toán</li>
                        <li>Quy trình bảo hành</li>
                        <li>Quy trình vận chuyển</li>
                    </ul>
                </div>
                <div className={cx('footer-fanpage')}>
                    <h3>Fanpage</h3>
                    <a href="">
                        <FontAwesomeIcon className={cx('icon', 'icon-fb')} icon={faFacebook} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon className={cx('icon', 'icon-ig')} icon={faInstagram} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon className={cx('icon', 'icon-tiktok')} icon={faTiktok} />
                    </a>
                </div>
            </div>
            <div className={cx('wrapper-footer-copyright')}>
                <a href="">copyright © 2025 MyPetShop. All rights reserved.</a>
                <div className={cx('navigation')}>
                    <Link to={config.routes.home}>
                        <div className={cx('home')}>
                            <p>Trang chủ</p>
                        </div>
                    </Link>
                    <Link to={config.routes.contact}>
                        <div className={cx('contact')}>
                            <p>Liên hệ</p>
                        </div>
                    </Link>
                    <Link to={config.routes.contact}>
                        <div className={cx('like')}>
                            <p>Yêu thích</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Contact;
