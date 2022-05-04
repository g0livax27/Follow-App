export default function Header() {
    return(
        <main>
            <div className='headerLogo'>
                <img src={require(`../../assets/followthemoney.png`)} alt='follow-app' height='80%' width='100%'/>     
                <div className='headerBtn'>
                    <button>Sign Up</button>
                    <button>Login</button>
                </div>
            </div>
        </main>
    )
};