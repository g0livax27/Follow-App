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
            <Link to={`/${month}/bills`}>
                Bills
            </Link>
            <Link to={`/${month}/wishlists`}>
                Wish List
            </Link>
            <Footer/>
        </main>
    )
};