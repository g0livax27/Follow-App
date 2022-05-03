import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function CreateForm(){
    return(
        <main>
            <form class='newExpense' method="POST">
                <fieldset>
                    Name: <input name='name' type='text'/>
                    Amount: <input name='amount' type='text'/>
                    Paid? <input name='complete' type=''/>
                </fieldset>
            </form>
        </main>
    )
};