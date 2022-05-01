import { Link } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function Header() {
    return(
        <main>
            <div className='headerLogo'>
                <img src={require(`../../assets/followthemoney.png`)} alt='follow-app' height='80%' width='100%'/>     
                <div className='headerBtn'>
                    <button to={<SignUpForm/>}>Sign Up</button>
                    <button to={<LoginForm/>}>Login</button>
                </div>
            </div>
        </main>
    )
};