import classNames from 'classnames/bind';

import styles from './Course.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Course() {
    return (
        <div className={cx('course')}>
            <div
                className={cx('course-bgr')}
                style={{ backgroundImage: 'url(https://files.fullstack.edu.vn/f8-prod/courses/3.png)' }}
            >
                <Link to="/source/room" className={cx('course-view')}>
                    Xem khóa học
                </Link>
            </div>

            <span className={cx('course-name')}>Lập trình web</span>
        </div>
    );
}

export default Course;
