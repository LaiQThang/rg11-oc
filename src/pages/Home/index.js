import { useNavigate } from 'react-router-dom';
import { useAuth } from '~/components/Auth';

function Home() {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/login');
    };
    console.log(auth.data);
    return (
        <div>
            welcome to RG11
            <button onClick={handleLogout}> Logout</button>
        </div>
    );
}

export default Home;
