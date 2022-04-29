import { Link, useParams } from 'react-router-dom';

export default function ListPage() {
    const { month } = useParams();
    return(
        <main>
            <h1>List Page</h1>
            <Link to={`/${month}/bills`}>
                Bills
            </Link>
            <Link to={`/${month}/wishlists`}>
                Wish List
            </Link>
        </main>
    )
};