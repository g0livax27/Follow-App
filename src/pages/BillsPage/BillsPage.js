import { Link } from 'react-router-dom';

export default function BillsPage({ bill }){
    return(
        <main>
            <h1>Bills</h1>
            <Link to="/expenses">Back</Link>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>Bill Name</th>
                        <th>Bill Amount</th>
                        <th>Is Bill Paid?</th>
                        <th>Edit Expense</th>
                        <th>Delete Expense</th>
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