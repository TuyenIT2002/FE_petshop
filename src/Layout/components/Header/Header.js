import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import images from '~/assets/images/index';
import config from '~/components/config/config';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home}>
                        <img src={images.logo} alt="petshop"></img>
                    </Link>
                </div>
                <div className={cx('navigation')}>navigation</div>
                <div className={cx('action')}>action</div>
            </div>
        </header>
    );
}

export default Header;
