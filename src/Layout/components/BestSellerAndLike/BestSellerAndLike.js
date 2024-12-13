import styles from './BestSellerAndLike.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function BestSellerAndLike() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product-best-selling')}>
                <div className={cx('header')}>
                    <h3>BÁN CHẠY</h3>
                </div>
                <div className={cx('list-product')}>
                    <div className={cx('product-item')}>
                        <div className={cx('image')}>
                            <img
                                src="https://www.petmart.vn/wp-content/uploads/2020/10/do-choi-cho-cho-keu-chut-chit-bang-cao-su-elite-hinh-thu.jpg"
                                alt="image 1"
                            />
                        </div>
                        <div className={cx('content')}>
                            <p>Đệm nằm hình gấu</p>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />
                                <span>5.0</span>
                            </div>
                            <div className={cx('price')}>
                                <span className={cx('new-price')}>45.000 đ</span>
                                <span className={cx('old-price')}>60.000 đ</span>
                            </div>
                            <div className={cx('icon-event')}>
                                <FontAwesomeIcon className={cx('icon-shopping')} icon={faBagShopping} />
                                <FontAwesomeIcon className={cx('icon-heart')} icon={faHeart} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('image')}>
                            <img
                                src="https://www.petmart.vn/wp-content/uploads/2020/10/do-choi-cho-cho-keu-chut-chit-bang-cao-su-elite-hinh-thu.jpg"
                                alt="image 1"
                            />
                        </div>
                        <div className={cx('content')}>
                            <p>Đệm nằm hình gấu</p>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />
                                <span>5.0</span>
                            </div>
                            <div className={cx('price')}>
                                <span className={cx('new-price')}>45.000 đ</span>
                                <span className={cx('old-price')}>60.000 đ</span>
                            </div>
                            <div className={cx('icon-event')}>
                                <FontAwesomeIcon className={cx('icon-shopping')} icon={faBagShopping} />
                                <FontAwesomeIcon className={cx('icon-heart')} icon={faHeart} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('image')}>
                            <img
                                src="https://www.petmart.vn/wp-content/uploads/2020/10/do-choi-cho-cho-keu-chut-chit-bang-cao-su-elite-hinh-thu.jpg"
                                alt="image 1"
                            />
                        </div>
                        <div className={cx('content')}>
                            <p>Đệm nằm hình gấu</p>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />
                                <span>5.0</span>
                            </div>
                            <div className={cx('price')}>
                                <span className={cx('new-price')}>45.000 đ</span>
                                <span className={cx('old-price')}>60.000 đ</span>
                            </div>
                            <div className={cx('icon-event')}>
                                <FontAwesomeIcon className={cx('icon-shopping')} icon={faBagShopping} />
                                <FontAwesomeIcon className={cx('icon-heart')} icon={faHeart} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('image')}>
                            <img
                                src="https://www.petmart.vn/wp-content/uploads/2020/10/do-choi-cho-cho-keu-chut-chit-bang-cao-su-elite-hinh-thu.jpg"
                                alt="image 1"
                            />
                        </div>
                        <div className={cx('content')}>
                            <p>Đệm nằm hình gấu</p>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />
                                <span>5.0</span>
                            </div>
                            <div className={cx('price')}>
                                <span className={cx('new-price')}>45.000 đ</span>
                                <span className={cx('old-price')}>60.000 đ</span>
                            </div>
                            <div className={cx('icon-event')}>
                                <FontAwesomeIcon className={cx('icon-shopping')} icon={faBagShopping} />
                                <FontAwesomeIcon className={cx('icon-heart')} icon={faHeart} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('product-like')}>
                <div className={cx('header')}>
                    <h3>YÊU THÍCH</h3>
                </div>
                <div className={cx('list-product')}>
                    <div className={cx('product-item')}>
                        <div className={cx('image')}>
                            <img
                                src="https://www.petmart.vn/wp-content/uploads/2020/10/do-choi-cho-cho-keu-chut-chit-bang-cao-su-elite-hinh-thu.jpg"
                                alt="image 1"
                            />
                        </div>
                        <div className={cx('content')}>
                            <p>Đệm nằm hình gấu</p>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />
                                <span>5.0</span>
                            </div>
                            <div className={cx('price')}>
                                <span className={cx('new-price')}>45.000 đ</span>
                                <span className={cx('old-price')}>60.000 đ</span>
                            </div>
                            <div className={cx('icon-event')}>
                                <FontAwesomeIcon className={cx('icon-shopping')} icon={faBagShopping} />
                                <FontAwesomeIcon className={cx('icon-heart')} icon={faHeart} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('image')}>
                            <img
                                src="https://www.petmart.vn/wp-content/uploads/2020/10/do-choi-cho-cho-keu-chut-chit-bang-cao-su-elite-hinh-thu.jpg"
                                alt="image 1"
                            />
                        </div>
                        <div className={cx('content')}>
                            <p>Đệm nằm hình gấu</p>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />
                                <span>5.0</span>
                            </div>
                            <div className={cx('price')}>
                                <span className={cx('new-price')}>45.000 đ</span>
                                <span className={cx('old-price')}>60.000 đ</span>
                            </div>
                            <div className={cx('icon-event')}>
                                <FontAwesomeIcon className={cx('icon-shopping')} icon={faBagShopping} />
                                <FontAwesomeIcon className={cx('icon-heart')} icon={faHeart} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('image')}>
                            <img
                                src="https://www.petmart.vn/wp-content/uploads/2020/10/do-choi-cho-cho-keu-chut-chit-bang-cao-su-elite-hinh-thu.jpg"
                                alt="image 1"
                            />
                        </div>
                        <div className={cx('content')}>
                            <p>Đệm nằm hình gấu</p>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />
                                <span>5.0</span>
                            </div>
                            <div className={cx('price')}>
                                <span className={cx('new-price')}>45.000 đ</span>
                                <span className={cx('old-price')}>60.000 đ</span>
                            </div>
                            <div className={cx('icon-event')}>
                                <FontAwesomeIcon className={cx('icon-shopping')} icon={faBagShopping} />
                                <FontAwesomeIcon className={cx('icon-heart')} icon={faHeart} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('image')}>
                            <img
                                src="https://www.petmart.vn/wp-content/uploads/2020/10/do-choi-cho-cho-keu-chut-chit-bang-cao-su-elite-hinh-thu.jpg"
                                alt="image 1"
                            />
                        </div>
                        <div className={cx('content')}>
                            <p>Đệm nằm hình gấu</p>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />
                                <span>5.0</span>
                            </div>
                            <div className={cx('price')}>
                                <span className={cx('new-price')}>45.000 đ</span>
                                <span className={cx('old-price')}>60.000 đ</span>
                            </div>
                            <div className={cx('icon-event')}>
                                <FontAwesomeIcon className={cx('icon-shopping')} icon={faBagShopping} />
                                <FontAwesomeIcon className={cx('icon-heart')} icon={faHeart} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestSellerAndLike;
