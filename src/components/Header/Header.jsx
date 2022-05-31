import { Link } from 'react-router-dom';
import UserLogOut from '../LogOut/LogOut';
import BackButton from '../BackButton/BackButton';

export default function Header({ user, setShowSignUp, setShowLogin, refresh, setRefresh }) {
    const handleClick = (btnClick) => {
        if (btnClick === 'Sign Up') {
            setShowLogin(false)
            setShowSignUp(true)
        } else if (btnClick === 'Log In') {
            setShowLogin(true)
            setShowSignUp(false)
        }
    }
    return (
        <nav>
            {
                !user ?
                    <div className='headerLogo'>
                        <img src={require(`../../assets/followthemoney.png`)} alt='follow-app' height='80%' width='100%' />
                        <div className='headerBtn'>
                            <button onClick={() => {
                                handleClick('Log In')
                            }}>Log In</button>
                            <button onClick={() => {
                                handleClick('Sign Up')
                            }}>Sign Up</button>
                        </div>
                    </div>
                    :
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className='loggedInHeader'>
                            <Link to='/'>
                                <img src={require(`../../assets/followlogo-nowords.png`)} alt='follow-app logo' />
                            </Link>
                            <div className='loggedInHeaderChild'>
                                <p>Greetings, {user.name}</p>
                                <UserLogOut refresh={refresh} setRefresh={setRefresh} />
                            </div>
                        </div>
                        <BackButton />
                    </div>
            }
        </nav>
    )
};