import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useRef } from 'react';

export default function CreateForm(){
    const name = useRef(null);
    const amount = useRef(null);
    const complete = useRef(null);
    const addNote = useRef(null);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        try{
            fetch('http://localhost:3001/api/expenses', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: name.current.value,
                    amount: amount.current.value,
                    complete: complete.current.value,
                    note: addNote.current.value
                })
            });
        }catch(err){
            console.log(err);
        }
    };

    return(
        <main>
            <form class='newExpense' method="POST">
                <fieldset>
                    Name: <input name='name' ref={name} type='text'/>
                    Amount: <input name='amount' ref={amount} type='text'/>
                    Paid? <input name='complete' ref={complete} type='checkbox'/>
                    <select>
                        <option>Bills</option>
                        <option>Wish List</option>
                    </select>
                </fieldset><br/>
                <input placeholder='Add Note' ref={addNote} type='textbox'/>
                <input type='submit' value='Add'/>
            </form>
        </main>
    )
};