import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import BackButton from '../../components/BackButton/BackButton';
import NewExpenseButton from '../../components/NewExpenseButton/NewExpenseButton';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';

export default function ListPage(){
    return(
        <main>
            <LoggedInHeader/>
            <BackButton/>
            <NewExpenseButton/>
            <Cards/>
            <Footer/>
        </main>
    )
};