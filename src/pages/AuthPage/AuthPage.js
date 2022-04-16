import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useState } from "react"

export default function AuthPage({setUser}){
    const [showSignUp, setShowSignUp] = useState(false)
 return (<main>
     <h1>AuthPage</h1>
     <button onClick={() => setShowSignUp(!showSignUp) }>{ showSignUp ? 'Log In' : 'Sign Up'}</button>
     {
         showSignUp?
         <SignUpForm setUser={setUser}/> :
         <LoginForm setUser={setUser}/>
     }
     
 </main>)
}