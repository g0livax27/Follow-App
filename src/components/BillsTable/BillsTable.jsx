import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function BillsTable(){
    const { month } = useParams();
    const [bills, setBills] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        (async() => {
        try{
            const response = await fetch(`http://localhost:3001/api/expenses/${month}`);
            const data = await response.json();
            setBills(data);
        }catch(err){
            console.log(err);
        }
        })()
    }, [refresh]);

    return(
        <table className="billTable">
            <thead>
                <tr>
                    <th>Bill</th>
                    <th>Amount</th>
                    <th>Paid?</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    bills.map((month, i) => {
                        return(
                            month.list === "Bills" &&
                            <tr key={i}>
                                <td>
                                    {month.month}
                                </td>
                                <td>{month.name} <Link to={`/${month._id}/edit`}>Add Note/Edit</Link></td>
                                <td>${month.amount}</td>
                                <td>{month.complete ? 'Paid in Full' : 'No, Still Need to Pay'}</td>
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
    )
};