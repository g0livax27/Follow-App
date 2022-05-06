import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import BackButton from '../../components/BackButton/BackButton';
import EditForm from '../../components/EditForm/EditForm';
import Footer from '../../components/Footer/Footer';

export default function EditPage({ months }){
    return(
        <main>
            <LoggedInHeader/>
            <BackButton/>
            <h1>Edit Expense</h1>
            <EditForm months={months}/>
            <Footer/>
        </main>
    )
};