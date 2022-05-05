import { useParams } from 'react-router-dom';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import BackButton from '../../components/BackButton/BackButton';
import NewExpenseButton from '../../components/NewExpenseButton/NewExpenseButton';
import BillsTable from '../../components/BillsTable/BillsTable';
import BillsPaidTable from '../../components/BillsPaidTable/BillsPaidTable';
import Footer from '../../components/Footer/Footer';

export default function BillsPage(){
    const { month } = useParams();

    return(
        <main>
            <LoggedInHeader/>
            <BackButton/>
            <h1>{month} Bills</h1>
            <NewExpenseButton/>
            <BillsTable/> 
            <BillsPaidTable/>
            <Footer/>
        </main>
    )
};