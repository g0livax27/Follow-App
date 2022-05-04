import { useParams, useNavigate } from 'react-router-dom';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import BackButton from '../../components/BackButton/BackButton';
import NewExpenseButton from '../../components/NewExpenseButton/NewExpenseButton';
import Footer from '../../components/Footer/Footer';

export default function ListPage(){
    const { month } = useParams();
    const navigate = useNavigate();

    return(
        <main>
            <LoggedInHeader/>
            <BackButton/>
            <NewExpenseButton/>
            <div className='lists'>
                <div className='billsCard'>
                    <button onClick={() =>{
                        navigate(`/${month}/bills`)
                    }}>
                        Bills
                    </button>
                    <div>
                        <img src={require(`../../assets/favicon-img.ico`)} alt='follow-app' height='320px' width='285px'/>     
                    </div>
                </div>
                <div className='wishCard'>
                    <button onClick={() =>{
                        navigate(`/${month}/wishlist`)
                    }}>
                        Wish List
                    </button>
                    <div>
                        <img src={require(`../../assets/favicon-img.ico`)} alt='follow-app' height='320px' width='285px'/>     
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
};