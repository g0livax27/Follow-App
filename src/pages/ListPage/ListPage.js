import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import BackButton from '../../components/BackButton/BackButton';
import NewExpenseButton from '../../components/NewExpenseButton/NewExpenseButton';
import BillsCard from '../../components/BillsCard/BillsCard';
import WishListCard from '../../components/WishListCard/WishListCard';
import Footer from '../../components/Footer/Footer';

export default function ListPage(){
    return(
        <main>
            <LoggedInHeader/>
            <BackButton/>
            <NewExpenseButton/>
            <BillsCard/>
            <WishListCard/>
            <Footer/>
        </main>
    )
};