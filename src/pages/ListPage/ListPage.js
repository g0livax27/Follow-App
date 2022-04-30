import { Link, useParams } from 'react-router-dom';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import BackButton from '../../components/BackButton/BackButton';
import Footer from '../../components/Footer/Footer';

export default function ListPage(){
    const { month } = useParams();
    return(
        <main>
            <LoggedInHeader/>
            <h1>List Page</h1>
            <BackButton/>
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