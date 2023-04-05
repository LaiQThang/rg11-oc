import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faCalendar, faHome, faPlus, faRestroom } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('side-bar')}>
                <Link className={cx('creat-room')} to="/create-room">
                    <FontAwesomeIcon icon={faPlus} />
                </Link>
                <Link className={cx('action')} to="/">
                    <FontAwesomeIcon icon={faHome} />
                    <span className={cx('title')}>Home</span>
                </Link>
                <Link className={cx('action')} to="/source">
                    <FontAwesomeIcon icon={faRestroom} />
                    <span className={cx('title')}>Lớp học</span>
                </Link>
                <Link className={cx('action')} to="/calendar">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span className={cx('title')}>Lịch</span>
                </Link>
            </div>
            <Link className={cx('bullhorn')} to="/newfeed">
                <FontAwesomeIcon icon={faBullhorn} />
            </Link>
        </div>
    );
}

export default Sidebar;
