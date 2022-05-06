import { useNavigate } from 'react-router-dom';

export default function Cards({ month }){
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
            <div className='wishCard'>
                <button onClick={() =>{
                    navigate(`/${month}/wishlist`)
                }}>
                    Wish List
                </button>
                <div>
                    <img src={require(`../../assets/favicon-img.ico`)} alt='follow-app' height='320px' width='285px'/>     
                </div>
            </div>
        </main>
    )
};