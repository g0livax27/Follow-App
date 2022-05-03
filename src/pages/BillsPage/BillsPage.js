import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import BackButton from '../../components/BackButton/BackButton';
import BillsTable from '../../components/BillsTable/BillsTable';
import Footer from '../../components/Footer/Footer';

export default function BillsPage(){
    return(
        <main>
            <LoggedInHeader/>
            <BackButton/>
            <h1>Bills</h1>
            <BillsTable/>
            <Footer/>
        </main>
    )
};