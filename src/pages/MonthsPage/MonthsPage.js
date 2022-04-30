import { Link } from 'react-router-dom';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import Footer from '../../components/Footer/Footer';
import MonthCards from '../../components/MonthCards/MonthCards';

export default function MonthsPage({ bill }){
    return(
        <main>
            <LoggedInHeader/>
            <Link to="/">Back</Link>
            <MonthCards/>
            <Footer/>
        </main>
    )
};