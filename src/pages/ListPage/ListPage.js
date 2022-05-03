import { Link, useParams, useNavigate } from 'react-router-dom';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import BackButton from '../../components/BackButton/BackButton';
import Footer from '../../components/Footer/Footer';

export default function ListPage(){
    const { month } = useParams();
    const navigate = useNavigate();

    return(
        <main>
            <LoggedInHeader/>
            <BackButton/>
            <button onClick={() => {
                navigate(`/expenses/${month}/new`);
            }}>
                New Expense
            </button>
            <div className='lists'>
                <div className='billsCard'>
                    <Link to={`/${month}/bills`}>
                        Bills
                    </Link>
                </div>
                <div className='wishCard'>
                    <Link to={`/${month}/wishlists`}>
                        Wish List
                    </Link>
                </div>
            </div>
            <Footer/>
        </main>
    )
};