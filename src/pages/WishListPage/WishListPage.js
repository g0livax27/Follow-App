import { useParams } from 'react-router-dom';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import BackButton from '../../components/BackButton/BackButton';
import WishListTable from '../../components/WishListTable/WishListTable';
import Footer from '../../components/Footer/Footer';

export default function WishListPage(){
    const { month } = useParams();
    return(
        <main>
            <LoggedInHeader/>
            <BackButton/>
            <h1>{month} Wish List</h1>
            <WishListTable/>
            <Footer/>
        </main>
    )
};