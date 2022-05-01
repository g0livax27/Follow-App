import { Link } from 'react-router-dom';

export default function LoggedInHeader() {
    return(
        <main>
            <div className='loggedInHeader'>
                <Link to='/expenses'>
                    <img src={require(`../../assets/followlogo-nowords.png`)} alt='follow-app logo'/>
                </Link>
                <div className='loggedInHeaderChild'>
                    <p>Greetings, user's name</p>
                    <button>Log Out</button>
                </div>
            </div>
        </main>
    )
};