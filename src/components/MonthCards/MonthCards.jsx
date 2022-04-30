import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function MonthCards(){
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
                                <Link to={`/${month}`}>{month.toUpperCase()}
                                    <div className='monthCards'>
                                        
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Footer/>
        </main>
    )
};