import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Blog() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2>Blog thú cưng</h2>
            </div>
            <div className={cx('blog')}>
                <div className={cx('blog-item')}>
                    <img
                        src="https://media.istockphoto.com/id/1286481312/vi/anh/ch%C3%A2n-dung-m%E1%BB%99t-con-husky-siberia-nh%C3%ACn-v%C3%A0o-m%C3%A1y-%E1%BA%A3nh-v%E1%BB%9Bi-c%C3%A1i-mi%E1%BB%87ng-m%E1%BB%9F-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-v%C3%A0ng.jpg?s=612x612&w=0&k=20&c=Ff9kUzILRVUPcJ8ip7xzZinM3rjRoDQ88RhKdyFzPNg="
                        alt=""
                    />
                    <div className={cx('content-blog')}>
                        <h3>Giống chó Husky</h3>
                        <div className={cx('date')}>11/12/2024</div>
                        <p>Husky là giống chó có sức ảnh hưởng lớn nhất trong văn hóa đại chúng trên thế giới</p>
                        <Button className={cx('see-more')} text to="/">
                            Xem thêm
                        </Button>
                        <div className={cx('looked')}>
                            <span>
                                <FontAwesomeIcon icon={faEye} />
                            </span>
                            <span>9</span>
                            <span>Lượt xem</span>
                        </div>
                    </div>
                </div>
                <div className={cx('blog-item')}>
                    <img
                        src="https://media.istockphoto.com/id/1286481312/vi/anh/ch%C3%A2n-dung-m%E1%BB%99t-con-husky-siberia-nh%C3%ACn-v%C3%A0o-m%C3%A1y-%E1%BA%A3nh-v%E1%BB%9Bi-c%C3%A1i-mi%E1%BB%87ng-m%E1%BB%9F-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-v%C3%A0ng.jpg?s=612x612&w=0&k=20&c=Ff9kUzILRVUPcJ8ip7xzZinM3rjRoDQ88RhKdyFzPNg="
                        alt=""
                    />
                    <div className={cx('content-blog')}>
                        <h3>Giống chó Husky</h3>
                        <div className={cx('date')}>11/12/2024</div>
                        <p>
                            Husky là giống chó có sức ảnh hưởng lớn nhất trong văn hóa đại chúng trên thế giớiHusky là
                            giống chó có sức ảnh hưởng lớn nhất trong văn hóa đại chúng trên thế giới
                        </p>
                        <Button className={cx('see-more')} text to="/">
                            Xem thêm
                        </Button>
                        <div className={cx('looked')}>
                            <span>
                                <FontAwesomeIcon icon={faEye} />
                            </span>
                            <span>9</span>
                            <span>Lượt xem</span>
                        </div>
                    </div>
                </div>
                <div className={cx('blog-item')}>
                    <img
                        src="https://media.istockphoto.com/id/1286481312/vi/anh/ch%C3%A2n-dung-m%E1%BB%99t-con-husky-siberia-nh%C3%ACn-v%C3%A0o-m%C3%A1y-%E1%BA%A3nh-v%E1%BB%9Bi-c%C3%A1i-mi%E1%BB%87ng-m%E1%BB%9F-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-v%C3%A0ng.jpg?s=612x612&w=0&k=20&c=Ff9kUzILRVUPcJ8ip7xzZinM3rjRoDQ88RhKdyFzPNg="
                        alt=""
                    />
                    <div className={cx('content-blog')}>
                        <h3>Giống chó Husky</h3>
                        <div className={cx('date')}>11/12/2024</div>
                        <p>Husky là giống chó có sức ảnh hưởng lớn nhất trong văn hóa đại chúng trên thế giới</p>
                        <Button className={cx('see-more')} text to="/">
                            Xem thêm
                        </Button>
                        <div className={cx('looked')}>
                            <span>
                                <FontAwesomeIcon icon={faEye} />
                            </span>
                            <span>9</span>
                            <span>Lượt xem</span>
                        </div>
                    </div>
                </div>
                <div className={cx('blog-item')}>
                    <img
                        src="https://media.istockphoto.com/id/1286481312/vi/anh/ch%C3%A2n-dung-m%E1%BB%99t-con-husky-siberia-nh%C3%ACn-v%C3%A0o-m%C3%A1y-%E1%BA%A3nh-v%E1%BB%9Bi-c%C3%A1i-mi%E1%BB%87ng-m%E1%BB%9F-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-v%C3%A0ng.jpg?s=612x612&w=0&k=20&c=Ff9kUzILRVUPcJ8ip7xzZinM3rjRoDQ88RhKdyFzPNg="
                        alt=""
                    />
                    <div className={cx('content-blog')}>
                        <h3>Giống chó Husky</h3>
                        <div className={cx('date')}>11/12/2024</div>
                        <p>Husky là giống chó có sức ảnh hưởng lớn nhất trong văn hóa đại chúng trên thế giới</p>
                        <Button className={cx('see-more')} text to="/">
                            Xem thêm
                        </Button>
                        <div className={cx('looked')}>
                            <span>
                                <FontAwesomeIcon icon={faEye} />
                            </span>
                            <span>9</span>
                            <span>Lượt xem</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
