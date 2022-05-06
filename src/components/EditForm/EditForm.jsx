import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CreateForm({ months }){
    const navigate = useNavigate();
    const { id } = useParams();
    const [ editBtn, setEditBtn ] = useState(false);
    const [ complete, setComplete ] = useState(false);
    const [ paid, setPaid ] = useState(false);

    const name = useRef(null);
    const amount = useRef(null);
    const addNote = useRef(null);
    const list = useRef('Bills');

    const foundExpense = months.find(expense => expense._id === id);
    useEffect(() => {
        if(editBtn){
        try{
            fetch(`http://localhost:3001/api/expenses/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: name.current.value,
                    amount: amount.current.value,
                    complete: paid,
                    note: addNote.current.value,
                    list: list.current.value
                }),
            });
                console.log('Expense Updated');
                navigate(`/${foundExpense.month}/${(list.current.value).split(' ').join('').toLowerCase()}`);
                setEditBtn(false);
        }catch(err){
            console.log(err);
        }
        }
    }, [editBtn]);

    useEffect(() => {
        if(complete){
            setPaid(true)
        } else {
            setPaid(false)
        }
    }, [complete]);

    return(
        <main className='edit'>
            <form className='editExpense'>
                <fieldset>
                    Name: <input defaultValue={foundExpense.name} name='name' ref={name} type='text'/><br/>
                    Amount: <input defaultValue={foundExpense.amount} name='amount' ref={amount} type='text'/><br/><br/>
                    Paid?                     
                    <label className='switch'>
                        <input name='complete' type='checkbox' id='check'
                            onClick={() => {
                                setComplete(!complete)
                            }}/>
                        <span className='slider round'></span>
                    </label>
                    <select defaultValue={foundExpense.list} ref={list}>
                        <option value='Bills'>Bills</option>
                        <option value='Wish List'>Wish List</option>
                    </select>
                </fieldset><br/>
                <textarea defaultValue={foundExpense.addNote} placeholder='add/edit note' ref={addNote} type='textbox'/><br/>
                <button className='btn-sm'
                    onClick={(evt) => {
                        setEditBtn(true)
                }}>
                    Update
                </button>
            </form>
        </main>
    )
};