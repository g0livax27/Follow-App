import { useParams } from 'react-router-dom';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import BackButton from '../../components/BackButton/BackButton';
import BillsTable from '../../components/BillsTable/BillsTable';
import Footer from '../../components/Footer/Footer';

export default function BillsPage(){
    const { month } = useParams();
    return(
        <main>
            <LoggedInHeader/>
            <BackButton/>
            <h1>{month} Bills</h1>
            <BillsTable/>
            <Footer/>
        </main>
    )
};