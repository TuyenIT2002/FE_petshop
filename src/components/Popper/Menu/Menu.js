import { useState } from 'react';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import Header from './Header';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);
const defaultFc = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFc }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]; // lấy phần tử cuối cùng của mảng

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children; // isParent = true nếu tồn tại children, hoặc = undefind
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1)); // cắt mảng từ 0 - gần cuối
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title="langue" onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    // hàm quay lại cấp cha
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        <Tippy
            interactive // để có thể s2elect vào phần tử của Tippy
            // visible
            delay={[0, 600]}
            offset={[12, 8]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
