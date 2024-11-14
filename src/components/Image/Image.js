import { forwardRef, useState } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, fallback: customFallback = images.noImage, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
