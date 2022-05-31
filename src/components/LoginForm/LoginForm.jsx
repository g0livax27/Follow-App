import { useState } from 'react';
import * as usersService from '../../utilities/users-service';


export default function LoginForm({ setUser }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('')

    const handleChange = (evt) => {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const user = await usersService.login(credentials);
            setUser(user)
        } catch {
            setError('Log In Failed - Try Again');
        }
    };

    return (
        <div className='form-styling'>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <button type="submit">LOG IN</button>
                </form>
            </div>
            <h1 className="error-message">&nbsp;{error}</h1>
        </div>
    )
};