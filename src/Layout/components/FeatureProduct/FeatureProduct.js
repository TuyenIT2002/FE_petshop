import styles from './FeatureProduct.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Product from '~/components/Product';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const LIST_PRODUCT = [
    {
        image: {
            src: 'https://png.pngtree.com/png-vector/20240807/ourlarge/pngtree-more-less-or-equal-with-cute-pet-toys-png-image_13149920.png',
            alt: 'image 1',
        },
        sale: '10%',
        content: 'Sản phẩm dành cho thú cưng nhà bạn, hãy nhanh tay đặt hàng bởi vì số lượng có hạn',
        price: '1000',
        icon: <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />,
    },
    {
        image: {
            src: 'https://png.pngtree.com/png-vector/20240807/ourlarge/pngtree-more-less-or-equal-with-cute-pet-toys-png-image_13149920.png',
            alt: 'image 2',
        },
        sale: '15%',
        content: 'Sản phẩm chất lượng cao, an toàn cho thú cưng của bạn!',
        price: '1200',
        icon: <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />,
    },
    {
        image: {
            src: 'https://png.pngtree.com/png-vector/20240807/ourlarge/pngtree-more-less-or-equal-with-cute-pet-toys-png-image_13149920.png',
            alt: 'image 3',
        },
        sale: '20%',
        content: 'Hãy thử ngay sản phẩm đặc biệt dành cho thú cưng của bạn!',
        price: '1500',
        icon: <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />,
    },
    {
        image: {
            src: 'https://png.pngtree.com/png-vector/20240807/ourlarge/pngtree-more-less-or-equal-with-cute-pet-toys-png-image_13149920.png',
            alt: 'image 4',
        },
        sale: '5%',
        content: 'Sản phẩm mới ra mắt, thiết kế dành riêng cho thú cưng của bạn.',
        price: '800',
        icon: <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />,
    },
    {
        image: {
            src: 'https://png.pngtree.com/png-vector/20240807/ourlarge/pngtree-more-less-or-equal-with-cute-pet-toys-png-image_13149920.png',
            alt: 'image 5',
        },
        sale: '25%',
        content: 'Ưu đãi lớn nhất trong năm, nhanh tay đặt hàng ngay!',
        price: '2000',
        icon: <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />,
    },
    {
        image: {
            src: 'https://png.pngtree.com/png-vector/20240807/ourlarge/pngtree-more-less-or-equal-with-cute-pet-toys-png-image_13149920.png',
            alt: 'image 5',
        },
        sale: '25%',
        content: 'Ưu đãi lớn nhất trong năm, nhanh tay đặt hàng ngay!',
        price: '2000',
        icon: <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />,
    },
    {
        image: {
            src: 'https://png.pngtree.com/png-vector/20240807/ourlarge/pngtree-more-less-or-equal-with-cute-pet-toys-png-image_13149920.png',
            alt: 'image 5',
        },
        sale: '25%',
        content: 'Ưu đãi lớn nhất trong năm, nhanh tay đặt hàng ngay!',
        price: '2000',
        icon: <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />,
    },
    {
        image: {
            src: 'https://png.pngtree.com/png-vector/20240807/ourlarge/pngtree-more-less-or-equal-with-cute-pet-toys-png-image_13149920.png',
            alt: 'image 5',
        },
        sale: '25%',
        content: 'Ưu đãi lớn nhất trong năm, nhanh tay đặt hàng ngay!',
        price: '2000',
        icon: <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />,
    },
    {
        image: {
            src: 'https://png.pngtree.com/png-vector/20240807/ourlarge/pngtree-more-less-or-equal-with-cute-pet-toys-png-image_13149920.png',
            alt: 'image 5',
        },
        sale: '25%',
        content: 'Ưu đãi lớn nhất trong năm, nhanh tay đặt hàng ngay!',
        price: '2000',
        icon: <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />,
    },
    {
        image: {
            src: 'https://png.pngtree.com/png-vector/20240807/ourlarge/pngtree-more-less-or-equal-with-cute-pet-toys-png-image_13149920.png',
            alt: 'image 5',
        },
        sale: '25%',
        content: 'Ưu đãi lớn nhất trong năm, nhanh tay đặt hàng ngay!',
        price: '2000',
        icon: <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />,
    },
    {
        image: {
            src: 'https://png.pngtree.com/png-vector/20240807/ourlarge/pngtree-more-less-or-equal-with-cute-pet-toys-png-image_13149920.png',
            alt: 'image 5',
        },
        sale: '25%',
        content: 'Ưu đãi lớn nhất trong năm, nhanh tay đặt hàng ngay!',
        price: '2000',
        icon: <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />,
    },
    {
        image: {
            src: 'https://png.pngtree.com/png-vector/20240807/ourlarge/pngtree-more-less-or-equal-with-cute-pet-toys-png-image_13149920.png',
            alt: 'image 5',
        },
        sale: '25%',
        content: 'Ưu đãi lớn nhất trong năm, nhanh tay đặt hàng ngay!',
        price: '2000',
        icon: <FontAwesomeIcon className={cx('star-icon')} icon={faStar} />,
    },
];

function FeatureProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2>SẢN PHẨM NỔI BẬT</h2>
            </div>
            <div className={cx('product-list')}>
                {LIST_PRODUCT.map((product, index) => (
                    <Product
                        key={index}
                        image={product.image}
                        sale={product.sale}
                        content={product.content}
                        price={product.price}
                        icon={product.icon}
                    />
                ))}
            </div>
            <div className={cx('show-more-btn')}>
                <Button outline to="/" rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                    Xem thêm
                </Button>
            </div>
        </div>
    );
}

export default FeatureProduct;
