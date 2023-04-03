import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '~/components/Auth';

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const auth = useAuth();
    const location = useLocation();

    const redirectPath = location.state?.path || '/';

    localStorage.clear();

    const handleLogin = () => {
        // fetch(`https://jsonplaceholder.typicode.com/users?username=${user}`);
        fetch(`http://localhost:5000/users?username=${user}`)
            .then((response) => response.json())
            .then((data) => {
                if (data?.length === 0) {
                    alert('Khong co du lieu!');
                } else {
                    auth.login(user, password, data);
                    auth.setTokens(data[0].token);
                    navigate(redirectPath, { replace: true });
                }
            });

        // async function loginUser(credentials) {
        //     return fetch('http://localhost:5000/api/token', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(credentials),
        //     }).then((data) => data.json());
        // }

        // const token = loginUser({
        //     user,
        //     password,
        // });

        // token.then(function (result) {
        //     console.log(result); // "Some User token"
        // });
        // const data = { username: user, password: password, full_name: 'Thang' };

        // fetch('http://localhost:5000/api/user', {
        //     method: 'PUT', // or 'PUT'
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>
                username: <input type="text" onChange={(e) => setUser(e.target.value)} placeholder="Enter username" />
            </label>

            <label>
                password:
                <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
            </label>
            <button onClick={handleLogin} style={{ width: '80px' }}>
                Login
            </button>
        </div>
    );
}

export default Login;
