import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';

import styles from './Register.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className={cx('wrapper')} style={{ background: `url(${images.background})` }}>
            <div className={cx('register')}>
                <img src={images.logo} alt="logo" className={cx('logo')} />
                <h2 className={cx('title')}>Central Register Service</h2>

                <form onSubmit={handleSubmit(onSubmit)} className={cx('body-register')}>
                    <label className={cx('label')}>Tên đăng nhập:</label>
                    <input className={cx('input')} type="text" {...register('username', { require: true })} />

                    <label className={cx('label')}>Mật khẩu:</label>
                    <input className={cx('input')} type="password" {...register('password')} />
                    <label className={cx('label')}>Nhập lại mật khẩu:</label>
                    <input className={cx('input')} type="password" {...register('rePassword')} />
                    <input type="submit" value="Đăng ký" className={cx('btn')} />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <p className={cx('footer')}>
                        Bạn đã có tài khoản?
                        <Link to="/login" className={cx('login')}>
                            Đăng nhập
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;
