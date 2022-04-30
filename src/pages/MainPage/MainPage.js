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
            <div className='mainCards'>
                <div className='cardA'>
                    <img src={require('../../assets/green-arrow.png')}/>
                </div>
                <div className='cardB'>
                    <img src={require('../../assets/green-arrow.png')}/>
                </div>
                <div className='cardC'>
                    <img src={require('../../assets/green-arrow.png')}/>
                </div>
            </div>
            <Footer/>
        </main>
    )
};