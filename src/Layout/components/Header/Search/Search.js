import styles from './Search.module.scss';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const cx = className.bind(styles);

function Search() {
    return (
        <div className={cx('search')}>
            <input placeholder="Tìm kiếm sản phẩm" spellCheck={false} />
            <div className={cx('search-btn')}>
                <FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
            </div>
        </div>
    );
}

export default Search;
