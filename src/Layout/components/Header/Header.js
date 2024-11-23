import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import images from '~/assets/images/index';
import Image from '~/components/Image/Image';
import config from '~/components/config/config';
import Search from './Search';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faCartShopping,
    faEarthAsia,
    faEllipsisVertical,
    faUser,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
];

function Header() {
    const currentUser = true;

    const handelMenuChange = (MenuItem) => {
        console.log(MenuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true /*tạo vạch kẻ*/,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home}>
                        <img src={images.logo} alt="petshop"></img>
                    </Link>
                </div>
                <div className={cx('navigation')}>
                    <Link to={config.routes.home}>
                        <div className={cx('home')}>
                            <h2>HOME</h2>
                        </div>
                    </Link>
                    <Link to={config.routes.pet}>
                        <div className={cx('pets')}>
                            <h2>PETS</h2>
                            <FontAwesomeIcon className={cx('faAngleDown')} icon={faAngleDown} />
                        </div>
                    </Link>
                    <Link to={config.routes.blog}>
                        <div className={cx('blog')}>
                            <h2>BLOG</h2>
                        </div>
                    </Link>
                    <Link to={config.routes.contact}>
                        <div className={cx('contact')}>
                            <h2>CONTACT</h2>
                        </div>
                    </Link>
                </div>
                <div className={cx('action')}>
                    <Search />
                    <div className={cx('cart')}>
                        <FontAwesomeIcon className={cx('icon-cart')} icon={faCartShopping} />
                        <span className={cx('cart-notification')}>1</span>
                    </div>
                    <>
                        <Button outline>login</Button>
                    </>

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handelMenuChange}>
                        {currentUser ? (
                            <Image className={cx('avata')} src="" alt="anh avata" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
