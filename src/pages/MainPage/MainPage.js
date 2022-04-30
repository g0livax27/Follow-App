import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function MainPage(){
    return(
        <main>
            <Header/>
            <Link to={<SignUpForm/>}>Sign Up</Link>
            <Link to={<LoginForm/>}>Login</Link>
            <h1>Main Page</h1>
            <h1>Card 1</h1>
            <h1>Card 2</h1>
            <h1>Card 3</h1>
            <Footer/>
        </main>
    )
};