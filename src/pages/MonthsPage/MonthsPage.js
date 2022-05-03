import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import Footer from '../../components/Footer/Footer';
import BackButton from '../../components/BackButton/BackButton';
import MonthCards from '../../components/MonthCards/MonthCards';

export default function MonthsPage(){
    return(
        <main>
            <LoggedInHeader/>
            <BackButton/>
            <MonthCards/>
            <Footer/>
        </main>
    )
};