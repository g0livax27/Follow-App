import { useParams, useNavigate } from 'react-router-dom';

export default function BillsCard(){
    const { month } = useParams();
    const navigate = useNavigate();
    return(
        <main className='lists'>
            <div className='billsCard'>
                <button onClick={() =>{
                    navigate(`/${month}/bills`)
                }}>
                    Bills
                </button>
                <div>
                    <img src={require(`../../assets/favicon-img.ico`)} alt='follow-app' height='320px' width='285px'/>     
                </div>
            </div>
        </main>
    )
};