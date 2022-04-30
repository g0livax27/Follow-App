export default function LoggedInHeader() {
    return(
        <main>
            <div className='loggedInHeader'>
                <img src={require(`../../assets/followlogo-nowords.png`)} alt='follow-app logo'/>
                <p>Greetings, user's name</p>
                <button>Log Out</button>
            </div>
        </main>
    )
};