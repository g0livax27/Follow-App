import { Link } from 'react-router-dom';

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
        <main className='months'>
            {
                months.map((month, i) => { 
                    return(
                        <div key={i} className='monthCards'>
                            <Link to={`/${month}`}>
                                <div>
                                    <img src={require(`../../assets/${month}.jpeg`)} alt={month} height='100px' width='100%'/>     
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </main>
    )
};