import classNames from 'classnames/bind';

import styles from './Source.module.scss';
import Course from './Course';

const cx = classNames.bind(styles);

function Source() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>Khóa học của bạn</span>
            <div className={cx('content')}>
                <Course />
            </div>
        </div>
    );
}

export default Source;
