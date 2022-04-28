import { Link } from 'react-router-dom';

export default function Button() {
    return(
        <main>
            <Link to='/bills'>Bills</Link>
            <Link to='/wishlist'>Wish List</Link>
        </main>
    )
};