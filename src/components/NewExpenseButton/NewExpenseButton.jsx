import { useNavigate, useParams } from 'react-router-dom';

export default function NewExpenseButton(){
    const { month } = useParams();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/expenses/${month}/new`)
    };
    
    return(
        <main className='newExpenseBtn'>
            <button onClick={handleClick}>New Expense</button>
        </main>
    )
};