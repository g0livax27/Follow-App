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
            <div className='mainCards'>
                <div className='cardA'>
                    <img src={require('../../assets/green-arrow.png')}/>
                    <h4>PLAN</h4>
                    <p>Map out your monthly spending ahead of time.</p>
                </div>
                <div className='cardB'>
                    <img src={require('../../assets/green-arrow.png')}/>
                    <h4>TRACK</h4>
                    <p>Log your expenditures and keep them organized.</p>
                </div>
                <div className='cardC'>
                    <img src={require('../../assets/green-arrow.png')}/>
                    <h4>SAVE</h4>
                    <p>Set aside extra money for when you need it.</p>
                </div>
            </div>
            <Footer/>
        </main>
    )
};