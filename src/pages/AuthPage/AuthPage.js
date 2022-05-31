import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser, showLogin, showSignUp }) {
    return (
        <main className='body-styling'>
            <h1>{showSignUp ? 'Sign Up' : 'Log In'}</h1>
            {
                // if sign up button was clicked
                showSignUp ?
                    <SignUpForm setUser={setUser} /> :
                    // if login button was clicked
                    showLogin &&
                    <LoginForm setUser={setUser} />
            }
        </main>
    )
};