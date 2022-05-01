import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoggedInHeader from '../../components/LoggedInHeader/LoggedInHeader';
import BackButton from '../../components/BackButton/BackButton';
import Footer from '../../components/Footer/Footer';

export default function WishListPage(){
    const { month } = useParams();
    const [bills, setBills] = useState([]);
    
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
      }, []);
    return(
        <main>
            <LoggedInHeader/>
            <BackButton/>
            <h1>Wish List</h1>
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
                        bills.map((month, i) => {
                            return(
                                <tr key={i}>
                                    <td>
                                        {month.month}
                                    </td>
                                    <td>{month.name} <Link to={`/${month._id}/edit`}>Add Note/Edit</Link></td>
                                    <td>${month.amount}</td>
                                    <td>{month.complete ? 'Paid in Full' : 'No, Still Need to Pay'}</td>
                                    <td><form action={`/bills/${month._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value={`Delete`}/>
                                    </form></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Footer/>
        </main>
    )
};