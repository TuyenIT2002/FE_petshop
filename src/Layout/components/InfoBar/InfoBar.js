import styles from './InfoBar.moudle.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMoving, faDollarSign, faClock, faGift } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function InfoBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('ship-bar')}>
                <FontAwesomeIcon className={cx('icon')} icon={faTruckMoving} />
                <h2>Miễn phí ship</h2>
                <p>Đơn hàng từ 1.000.000 đ</p>
            </div>
            <div className={cx('money-bar')}>
                <FontAwesomeIcon className={cx('icon')} icon={faDollarSign} />
                <h2>Hoàn tiền 100%</h2>
                <p>Trong 30 ngày</p>
            </div>
            <div className={cx('clock-bar')}>
                <FontAwesomeIcon className={cx('icon')} icon={faClock} />
                <h2>Giờ mở cửa</h2>
                <p>T2-Cn: 8.00-18.00</p>
            </div>
            <div className={cx('gift-bar')}>
                <FontAwesomeIcon className={cx('icon')} icon={faGift} />
                <h2>Quà tặng tích điểm</h2>
                <p>1000 đ = 1 điểm</p>
            </div>
        </div>
    );
}

export default InfoBar;
