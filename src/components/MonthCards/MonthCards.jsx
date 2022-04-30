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
        <main>
            <ul style={{listStyle: 'none'}}>
                {
                    months.map((month, i) => { 
                        return(
                            <li key={i}>
                                <Link to={`/${month}`}>
                                    <div class='monthCards'>
                                        <img src={require(`../../assets/${month}.jpeg`)} alt={month}/>           <div class='container'>
                                        </div>      
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
};