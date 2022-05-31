import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewExpenseButton from '../../components/NewExpenseButton/NewExpenseButton';
import BillsTable from '../../components/BillsTable/BillsTable';
import BillsPaidTable from '../../components/BillsPaidTable/BillsPaidTable';

export default function BillsPage({ user }) {
    const { month } = useParams();
    const [paid, setPaid] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/expenses/${month}`);
                const data = await response.json();
                setPaid(data);
            } catch (err) {
                console.log(err);
            }
        })()
    }, [refresh]);

    return (
        <main>
            <h1>{month} Bills</h1>
            <NewExpenseButton />
            <BillsTable paid={paid} refresh={refresh} setRefresh={setRefresh} />
            <BillsPaidTable paid={paid} refresh={refresh} setRefresh={setRefresh} />
        </main>
    )
};