import { useState, useEffect } from 'react';
import styles from './Banner.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image/Image';
import images from '~/assets/images/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const LIST_IMAGE_BANNER = [
    {
        src: images.imgbanner1,
        alt: 'Image 1',
    },
    {
        src: images.imgbanner2,
        alt: 'Image 2',
    },
    {
        src: images.imgbanner3,
        alt: 'Image 3',
    },
    {
        src: images.imgbanner4,
        alt: 'Image 4',
    },
    {
        src: images.imgbanner5,
        alt: 'Image 5',
    },
    {
        src: images.imgbanner6,
        alt: 'Image 6',
    },
];

function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = LIST_IMAGE_BANNER.length;
    console.log('curentIndex: ', currentIndex);

    const prevSlide = () => {
        return setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
    };
    const nextSlide = () => {
        return setCurrentIndex((currentIndex + 1) % totalSlides);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        console.log('interval:', interval);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                {LIST_IMAGE_BANNER.map((image, index) => (
                    <div key={index} className={cx('slide', { active: index === currentIndex })}>
                        <Image src={image.src} alt={image.alt} />
                    </div>
                ))}

                <div className={cx('slide')}>
                    <Image src={images.imgbanner1} alt="image 1" />
                </div>
            </div>
            <button className={cx('btn_prev')} onClick={prevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className={cx('btn_next')} onClick={nextSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}

export default Banner;
