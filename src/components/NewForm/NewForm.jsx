import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CreateForm(){
    const name = useRef(null);
    const amount = useRef(null);
    const addNote = useRef(null);
    const list = useRef('Bills');

    const [ complete, setComplete ] = useState(false);
    const { month } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try{
            const response = await fetch('http://localhost:3001/api/expenses', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    month: month,
                    name: name.current.value,
                    amount: amount.current.value,
                    complete: complete,
                    note: addNote.current.value,
                    list: list.current.value
                }),
            });
            if(response.status === 200){
                console.log('Expense Created');
                navigate(`/${month}/${(list.current.value).split(' ').join('').toLowerCase()}`);
            };
        }catch(err){
            console.log(err);
        }
    };

    return(
        <main>
            <form className='newExpense' onSubmit={handleSubmit}>
                <fieldset>
                    Name: <input name='name' ref={name} type='text'/>
                    Amount: <input name='amount' ref={amount} type='text'/>
                    Paid? <input name='complete' id='check' type='checkbox'
                    onChange={() => {
                        console.log(document.getElementById('check').checked);
                        const isTrue = document.getElementById('check').checked
                        if(isTrue){
                            setComplete(true);
                        } else {
                            setComplete(false);
                        }
                    }}/>
                    <select ref={list}>
                        <option value='Bills'>Bills</option>
                        <option value='Wish List'>Wish List</option>
                    </select>
                </fieldset><br/>
                <input placeholder='Add Note' ref={addNote} type='textbox'/>
                <input type='submit' value='Add'/>
            </form>
        </main>
    )
};