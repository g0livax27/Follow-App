import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import BackButton from '../../components/BackButton/BackButton';
import Footer from '../../components/Footer/Footer';
import NewForm from '../../components/NewForm/NewForm';

export default function NewPage(){
    return(
        <main>
            <LoggedInHeader/>
            <BackButton/>
            <h1>Enter New Expense</h1>
            <NewForm/>
            <Footer/>
        </main>
    )
};