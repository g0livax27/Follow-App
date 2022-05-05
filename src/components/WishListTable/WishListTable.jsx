import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function WishListTable(){
    const { month } = useParams();
    const [items, setItems] = useState([]);
    const [refresh, setRefresh] = useState(false);

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
    }, [refresh]);

    return(
        <main>
            <table className="wishListTable">
            <div className='tableHeader'>
                <thead>
                    <tr>
                        
                            <th>Wish List Item</th>
                            <th>Price</th>
                            <th>Purchased?</th>
                            <th>Delete</th>
                        
                    </tr>
                </thead>
                </div>
                <tbody>
                    {
                        items.map((month, i) => {
                            return(
                                month.list === "Wish List" &&
                                <tr key={i}>
                                    <td>{month.name}<br/> <Link to={`/${month._id}/edit`}>Add Note/Edit</Link></td>
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
        </main>
    )
};