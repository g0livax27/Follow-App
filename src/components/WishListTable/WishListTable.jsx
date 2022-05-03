import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function WishListTable(){
    const { month } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async() => {
        try{
            const response = await fetch(`http://localhost:3001/api/expenses/${month}`);
            const data = await response.json();
            setItems(data);
        }catch(err){
            console.log(err);
        }
        })()
    }, []);

    return(
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th>Wish List Item</th>
                    <th>Price</th>
                    <th>Purchased?</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((month, i) => {
                        return(
                            month.list === "Wish List" &&
                            <tr key={i}>
                                <td>
                                    {month.month}
                                </td>
                                <td>{month.name} <Link to={`/${month._id}/edit`}>Add Note/Edit</Link></td>
                                <td>${month.amount}</td>
                                <td>{month.complete ? 'Paid in Full' : 'No, Still Need to Pay'}</td>
                                <td>
                                    
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
};