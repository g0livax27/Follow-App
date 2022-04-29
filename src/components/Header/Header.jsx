import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';

export default function Header() {
    return(
        <main>
            <Link to={<SignUpForm/>}>Sign Up</Link>
            <Link to={<LoginForm/>}>Login</Link>
        </main>
    )
};