import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CreateForm({ months, refresh, setRefresh }){
    const navigate = useNavigate();
    const { id } = useParams();
    const found = months.find(expense => expense._id === id);
    console.log(found)

    const name = useRef(null);
    const amount = useRef(null);
    const addNote = useRef(null);
    const list = useRef('Bills');

    const [ complete, setComplete ] = useState(false);
    const [ paid, setPaid ] = useState(false);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try{
            const response = await fetch(`http://localhost:3001/api/expenses/${id}`, {
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
            // if(response.status === 200){
            //     console.log('Expense Updated');
            //     navigate(`/${month}/${(list.current.value).split(' ').join('').toLowerCase()}`);
            // };
        }catch(err){
            console.log(err);
        }
    };

    useEffect(() => {
        if(complete){
            setPaid(true)
        } else {
            setPaid(false)
        }
    }, [complete]);

    return(
        <main className='edit'>
            <form className='editExpense' onSubmit={handleSubmit}>
                <fieldset>
                    Name: <input defaultValue={found.name} name='name' ref={name} type='text'/><br/>
                    Amount: <input defaultValue={found.amount} name='amount' ref={amount} type='text'/><br/><br/>
                    Paid?                     
                    <label className='switch'>
                        <input name='complete' type='checkbox' id='check'
                            onClick={() => {
                                setComplete(!complete)
                            }}/>
                        <span className='slider round'></span>
                    </label>
                    <select defaultValue={found.list} ref={list}>
                        <option value='Bills'>Bills</option>
                        <option value='Wish List'>Wish List</option>
                    </select>
                </fieldset><br/>
                <textarea defaultValue={found.addNote} placeholder='add/edit note' ref={addNote} type='textbox'/><br/>
                <button className='btn-sm'
                    onClick={(evt) => {
                }}>
                    Update
                </button>
            </form>
        </main>
    )
};