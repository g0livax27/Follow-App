import { useState, useEffect } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({setUser}){
    const [showSignUp, setShowSignUp] = useState(true);

    return(
        <main>
            <h1>Auth/Main Page</h1>
            <button onClick={ () => setShowSignUp(!showSignUp) }>{ showSignUp ? 'Log In' : 'Sign Up' }</button>
                {
                    showSignUp?
                    <SignUpForm setUser={setUser}/> :
                    <LoginForm setUser={setUser}/>
                }
        </main>
    )
};