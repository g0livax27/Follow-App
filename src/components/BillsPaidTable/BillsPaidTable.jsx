import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function BillsPaidTable(){
    const { month } = useParams();
    const [ paid, setPaid ] = useState([]);
    const [ refresh, setRefresh ] = useState(false);
    // const [ complete, setComplete ] = useState(false);
    const [ edit, setEdit ] = useState(false);

    useEffect(() => {
        (async() => {
        try{
            const response = await fetch(`http://localhost:3001/api/expenses/${month}`);
            const data = await response.json();
            setPaid(data);
        }catch(err){
            console.log(err);
        }
        })()
    }, [refresh]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(edit)
        try{
            fetch(`http://localhost:3001/api/expenses/${month._id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    complete: edit
                }),
            })
        }catch(err){
            console.log(err)
        }finally{
            setRefresh(!refresh)
            console.log('this is working')
        }
    };

    return(
        <main className='paidTables'>
            <h3>Paid Bills</h3>
            <table className="billsPaidTable">
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
                                month.list === "Bills" && month.complete &&
                                <tr key={i}>
                                    <td>{month.name}<br/> <Link to={`/${month._id}/edit`}>Add Note/Edit</Link></td>
                                    <td>${month.amount}</td>
                                    <td>
                                        <form onSubmit={handleSubmit}>
                                            <label className='switch'>
                                                <input name='complete' type='checkbox'
                                                onClick={() => {
                                                    setEdit(!edit)
                                                    console.log('button checked')
                                                    console.log(edit)
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