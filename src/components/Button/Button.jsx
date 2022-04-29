import { Link } from 'react-router-dom';

export default function Button() {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    return(
        <main>
            <ul>
                {
                    months.map((month, i) => { 
                        return(
                            <li key={i}>
                                <Link to={`/${month}`}>{month.toUpperCase()}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
};