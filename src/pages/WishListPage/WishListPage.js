import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import WishListTable from '../../components/WishListTable/WishListTable';
import BackButton from '../../components/BackButton/BackButton';
import Footer from '../../components/Footer/Footer';

export default function WishListPage(){
    return(
        <main>
            <LoggedInHeader/>
            <BackButton/>
            <h1>Wish List</h1>
            <WishListTable/>
            <Footer/>
        </main>
    )
};