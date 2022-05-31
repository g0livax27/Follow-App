import MainCards from '../../components/MainCards/MainCards';
import MonthsPage from '../MonthsPage/MonthsPage';
import AuthPage from '../AuthPage/AuthPage';

export default function MainPage({ user, setUser, showLogin, showSignUp }) {
    return (
        <main>
            {
                // if there's no user
                !user ?
                    // if login button wasn't pressed
                    !showLogin && !showSignUp ?
                        <MainCards />
                        :
                        // if login button was pressed
                        <AuthPage setUser={setUser} showLogin={showLogin} showSignUp={showSignUp} />
                    :
                    // if there is a user
                    <MonthsPage />
            }
        </main>
    )
};