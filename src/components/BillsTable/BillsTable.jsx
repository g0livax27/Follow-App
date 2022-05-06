import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BillsTable({ month, paid, refresh, setRefresh }){
    const [ complete, setComplete ] = useState(false);
    const [ edit, setEdit ] = useState(false);
    const [ monthId, setMonthId ] = useState('');

    useEffect(() => {
        if(edit){
            setComplete(false)
            try{
                fetch(`http://localhost:3001/api/expenses/${monthId}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    complete: complete
                })
            });
            setMonthId('');
            setRefresh(!refresh);
            }catch(err){
                console.log(err);
            }
        } else {
            setComplete(true);
        }
    }, [edit]);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try{
            await fetch(`http://localhost:3001/api/expenses/${month._id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    complete: complete
                })
            })
        }catch(err){
            console.log(err)
        }finally{
            setRefresh(!refresh);
        }
    };

    return(
        <main>
            <h3>Need to Pay</h3>
            <table className="billTable">
                    <thead className='tableHeader'>
                        <tr>
                            <th>Bill</th>
                            <th>Amount</th>
                            <th>Paid?</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                <tbody>
                    {
                        paid.map((month, i) => {
                            return(
                                month.list === "Bills" && !month.complete &&
                                <tr key={i}>
                                    <td>{month.name}<br/> <Link to={`/${month._id}/edit`}>Add Note/Edit</Link></td>
                                    <td>${month.amount}</td>
                                    <td>
                                        <form onSubmit={handleSubmit}>
                                            <label className='switch'>
                                                <input name='complete' type='checkbox'
                                                onClick={() => {
                                                    setMonthId(month._id)
                                                    setEdit(!edit);
                                                }} />
                                                <span className='slider round'></span>
                                            </label>
                                        </form>
                                    </td>
                                    <td>
                                        <button onClick={(evt) => {
                                            try{
                                                fetch(`http://localhost:3001/api/expenses/${month._id}`, {method: 'DELETE'});
                                            }catch(err){
                                                console.log(err);
                                            }finally{
                                                setRefresh(!refresh);
                                            }
                                        }}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </main>
    )
};