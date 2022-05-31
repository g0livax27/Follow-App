import { useParams } from 'react-router-dom';
import NewExpenseButton from '../../components/NewExpenseButton/NewExpenseButton';
import WishListTable from '../../components/WishListTable/WishListTable';
import WishlistPaidTable from '../../components/WishlistPaidTable/WishlistPaidTable';

export default function WishListPage({ user }) {
    const { month } = useParams();
    return (
        <main>
            <h1>{month} Wish List</h1>
            <NewExpenseButton />
            <WishListTable />
            <WishlistPaidTable />
        </main>
    )
};