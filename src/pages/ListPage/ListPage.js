import { Link, useParams } from 'react-router-dom';

export default function ListPage() {
    const { currentMonth } = useParams();
    return(
        <main>
            <h1>List Page</h1>
            <Link to={`/${currentMonth}/bills`}>
                Bills
            </Link>
            <Link to={`/${currentMonth}/wishlists`}>
                Wish List
            </Link>
        </main>
    )
};