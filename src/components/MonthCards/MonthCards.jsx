import { useNavigate } from 'react-router-dom';
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
                    // const navigate = useNavigate();
                    // const handleClick = () => {
                    //     navigate(`/${month}`)
                    // }
                    return(
                        <div key={i} className='monthCards'>
                            <div>
                                <img src={require(`../../assets/${month}.jpeg`)} alt={month} height='100px' width='100%'/>     
                            </div>
                            <img src={require('../../assets/green-arrow.png')}/>
                            <Link to={`/${month}`}>
                                <button>View Expenses</button>
                            </Link>
                        </div>
                    )
                })
            }
        </main>
    )
};