import { Link } from 'react-router-dom';

export default function BillsMonthPage({ bill }){
    return(
        <main>
            <h1>Bills</h1>
            <Link to="/expenses">Back</Link>
            <table className="table table-striped table-dark">
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
                        bill.map((month) => {
                            return(
                                <tr>
                                    <td>{month.billName} <Link to={`/${month._id}/edit`}>Add Note/Edit</Link></td>
                                    <td>${month.billAmount}</td>
                                    <td>{month.billPaid ? 'Paid in Full' : 'No, Still Need to Pay'}</td>
                                    <td><form action={`/bills/${month._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value={`Delete`}/>
                                    </form></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>   
        </main>

    )
};