import styles from './Product.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Product({ image, sale, content, price, icon }) {
    return (
        <div className={cx('product-item')}>
            <img src={image.src} alt={image.alt} />
            <div className={cx('sale-tag')}>{sale}</div>
            <div className={cx('content')}>
                <p>{content}</p>
                <div className={cx('price')}>{price} đ</div>
                <div className={cx('icon')}>
                    {icon}
                    <span>4.5</span>
                </div>
            </div>
        </div>
    );
}

export default Product;
