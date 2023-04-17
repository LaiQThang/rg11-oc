import classNames from 'classnames/bind';

import styles from './Room.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useSocket } from '~/providers/Socket';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Room() {
    const student = false;

    const { socket } = useSocket();

    const navigate = useNavigate();

    const data = JSON?.parse(localStorage?.getItem('data'));

    const handleRoomJoined = useCallback(
        ({ roomID }) => {
            // console.log('Room Joined', roomID);
            navigate(`/source/room/${roomID}`);
        },
        [navigate],
    );

    useEffect(() => {
        socket.on('joined-room', handleRoomJoined);

        return () => {
            socket.off('joined-room', handleRoomJoined);
        };
    }, [handleRoomJoined, socket]);

    const handleJoinRoom = () => {
        socket.emit('join-room', { roomID: '1', emailID: data[0].username });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('information')}>
                <div className={cx('preview')}>
                    <h1 className={cx('preview-title')}>Lập trình web</h1>
                    <p className={cx('preview-content')}>
                        Chào các bạn, để có cái nhìn tổng quan về ngành IT - Lập trình web chúng ta cùng học tại khóa
                        này trước nhé.
                    </p>
                </div>
                <div className={cx('detail')}>
                    <h2 className={cx('detail-title')}>Bạn sẽ học được gì?</h2>
                    <ul className={cx('detail-list')}>
                        <li className={cx('detail-item')}>Các kiến thức cơ bản, nền móng của ngành IT</li>
                        <li className={cx('detail-item')}>Các mô hình, kiến trúc cơ bản khi triển khai ứng dụng</li>
                        <li className={cx('detail-item')}>Các khái niệm, thuật ngữ cốt lõi khi triển khai ứng dụng</li>
                    </ul>
                </div>
                <div className={cx('file')}>
                    <h2 className={cx('file-title')}>Tài liệu học</h2>
                    <ul className={cx('file-list')}>
                        <li className={cx('file-item')}>
                            <FontAwesomeIcon icon={faCheck} className={cx('icon')} />
                            <a href="/">Unit1</a>
                        </li>
                        <li className={cx('file-item')}>
                            <FontAwesomeIcon icon={faCheck} className={cx('icon')} />
                            <a href="/">Unit2</a>
                        </li>
                        <li className={cx('file-item')}>
                            <FontAwesomeIcon icon={faCheck} className={cx('icon')} />
                            <a href="/">Unit3</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('video')}>
                    <h2 className={cx('video-title')}>Video bài giảng</h2>
                    <ul className={cx('video-list')}>
                        <li className={cx('video-item')}>
                            <FontAwesomeIcon icon={faCheck} className={cx('icon')} />
                            <a href="/">Video buổi 1</a>
                        </li>
                        <li className={cx('video-item')}>
                            <FontAwesomeIcon icon={faCheck} className={cx('icon')} />
                            <a href="/">Video buổi 2</a>
                        </li>
                        <li className={cx('video-item')}>
                            <FontAwesomeIcon icon={faCheck} className={cx('icon')} />
                            <a href="/">Video buổi 3</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('function')}>
                <button onClick={handleJoinRoom} className={cx('function-btn')}>
                    VÀO LỚP HỌC
                </button>
                {student ? (
                    <button className={cx('function-btn')}>NỘP BÀI</button>
                ) : (
                    <>
                        <button className={cx('function-btn')}>ĐĂNG TÀI LIỆU</button>
                        <button className={cx('function-btn')}>ĐĂNG VIDEO BÀI GIẢNG</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Room;
