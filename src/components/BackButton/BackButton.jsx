import { useNavigate} from 'react-router-dom';

export default function BackButton(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1)
    }
    return(
        <main>
            <button onClick={handleClick}>Back</button>
        </main>
    )
};