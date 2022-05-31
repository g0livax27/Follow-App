import { logOut } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export default function UserLogOut({ setUser, refresh, setRefresh }) {
    const navigate = useNavigate();
    function handleLogOut() {
        logOut();
        setUser(null);
        setRefresh(!refresh);
        navigate('/');
    };

    return (
        <div>
            <button className="btn-sm" onClick={handleLogOut}>Log Out</button>
        </div>
    );
};